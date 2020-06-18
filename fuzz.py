import subprocess, os, shutil, sys

TIMEOUT = 20 # seconds
BINARY = "./hermes/build_asan_ubsan/bin/hermes" # CHANGE THIS
DRRUN = "dynamorio/bin64/drrun" # DynamoRIO drrun path
COV_EVERY_N = 100 # Gather coverage every COV_EVERY_N testcases

def check_setup():
    if not os.path.isdir("crashes"):
        print("ERROR: Directory structure not setup correctly. Please run ./setup.sh")
        sys.exit(1)

    if not os.path.isdir("logs"):
        print("ERROR: Directory structure not setup correctly. Please run ./setup.sh")
        sys.exit(1)

    if not os.path.isdir("coverage"):
        print("ERROR: Directory structure not setup correctly. Please run ./setup.sh")
        sys.exit(1)

    if not os.path.isdir("coverage/html"):
        print("ERROR: Directory structure not setup correctly. Please run ./setup.sh")
        sys.exit(1)

    if not os.path.isdir("dynamorio"):
        print("ERROR: DynamoRIO not found in the local directory. Please run ./setup.sh or rename the DynamoRIO directory to \"dynamorio\"")
        sys.exit(1)

    if not os.path.exists("dynamorio/bin64/drrun") or not os.path.exists("dynamorio/tools/bin64/drcov2lcov") or not os.path.exists("dynamorio/tools/bin64/genhtml"):
        print("ERROR: DynamoRIO was not installed correctly. Please run ./install-dynamorio.sh")
        sys.exit(1)

def triage_crash(crash_msg, crash_file):
    unique_msg = b"" # A message unique to this crash
    unique_crash = 0

    # Check for use after poisons
    if b"use-after-poison" in crash_msg:
        for line in crash_msg.split(b"\n"):
            if line.strip().startswith(b"#0"):
                unique_msg = line.strip().split(b" ")
                break
        call_stack_msg = unique_msg[1][-3:] + b" " + unique_msg[3]
        
        # First ensure the call_stacks.log file actually exists
        open("logs/call_stacks.log", "a+").close()

        # If the crash is unique, this msg will not be in call_stacks.log file
        with open("logs/call_stacks.log", "rb+") as f:
            call_stacks = f.read().split(b"\n")
            if call_stack_msg not in call_stacks:
                f.write(call_stack_msg + b"\n")
                filename = f"uap_{str(unique_msg[1], 'utf-8')}.js"
                shutil.move(crash_file, f"./crashes/uaps/{filename}")
                unique_crash = 1
    # I will add in each type of crash as I find them
    else:
        filename = crash_file.split("/")[-1]
        shutil.move(crash_file, f"./crashes/{filename}")
        unique_crash = 1

    return unique_crash

def main():
    check_setup()

    if len(sys.argv) != 3:
        print("Usage: python3 fuzz.py <inputs_dir> <node_number>")
        sys.exit(1)
    
    input_dir = sys.argv[1]
    try:
        node_num = int(sys.argv[2])
    except ValueError:
        print("Error: node_number must be an integer")
        sys.exit(1)
    
    try:
        file_list = os.listdir(input_dir)
    except:
        print(f"Error: directory {input_dir} does not exist")
        sys.exit(1)

    # Used to determine when to gather code coverage data
    get_coverage = False

    # ASAN_OPTIONS environment variable
    asan_options = "detect_leaks=0,exitcode=42,abort_on_error=1,disable_coredump=0"
    env = os.environ.copy()
    env["ASAN_OPTIONS"] = asan_options

    # /dev/null
    FNULL = open(os.devnull, 'w')

    # Used for test case number tracking and timeout percentage
    num = timeouts = crashes = unique_crashes = 0

    for f in file_list:
        num += 1
        
        # Every 100 test cases, we want to gather coverage
        if (num % COV_EVERY_N == 0):
            get_coverage = True

        timeout_percent = float(timeouts) / float(num) * 100.0
        filename = f"./{sys.argv[1]}/{f}"

        print(f"#####################################################################")
        print(f" Test case {num}: {f}")
        print(f" Timeout Percentage: {timeout_percent}%")
        print(f" Crashes: {crashes}")
        print(f" Unique crashes: {unique_crashes}")
        print(f"#####################################################################")
        print()

        try:
            # If your binary requires extra arguments, add them here after the filename
            child = subprocess.run([BINARY, filename, "-Xhermes-internal-test-methods", "-jit",
                "-jit-crash-on-error", "-Xes6-proxy", "-Xes6-symbol"], timeout=TIMEOUT, env=env, 
                stdout=FNULL, stderr=subprocess.PIPE)
            exit_code = child.returncode

            if exit_code != 0: # We crashed
                # Figure out if the crash is unique
                output = child.stderr
                unique_crashes += triage_crash(output, filename)
                crashes += 1
            else:
                # We only want to gather coverage for non-crashing test cases
                if not get_coverage:
                    continue
                
                subprocess.run([DRRUN, "-t", "drcov", "-logdir", "coverage", "--", BINARY, "-jit",
                    "-jit-crash-on-error", "-Xhermes-internal-test-methods", "-Xes6-proxy", 
                    "-Xes6-symbol", filename])
                get_coverage = False

        except subprocess.TimeoutExpired:
            timeouts += 1

    log_file = f"logs/fuzzer{node_num}.log"
    with open(log_file, "w") as f:
        f.write(f"Timeout percentage: {timeout_percent}%\n")

if __name__ == "__main__":
    main()
