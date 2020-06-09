#!/usr/bin/env python3

import sys, subprocess, os, shutil

BINARY = "./hermes/build_asan_ubsan/bin/hermes"

def main():
    if not os.path.isdir("crashes"):
        printf("ERROR: No crashes directory. Please run ./setup.sh, or rename your crashes directory to \"crashes\"")
        sys.exit(1)

    try:
        file_list = os.listdir("crashes")
    except:
        printf("ERROR: No crashes directory. Please run ./setup.sh, or rename your crashes directory to \"crashes\"")
        sys.exit(1)

    uap_counter = 1
    asan_options = "detect_leaks=0,exitcode=42,abort_on_error=1"
    env = os.environ.copy()
    env["ASAN_OPTIONS"] = asan_options

    FNULL = open("/dev/null", "w")

    for f in file_list:
        print(f"######## Triaging {f} ########")
        child = subprocess.run([BINARY, f"./crashes/{f}", "-jit", "-jit-crash-on-error",
            "-Xes6-proxy", "-Xes6-symbol", "-Xhermes-internal-test-methods"], env=env,
            stdout=FNULL, stderr=subprocess.PIPE)
    
        if b"use-after-poison" in child.stderr:
            shutil.move(f"./crashes/{f}", f"./crashes/uaps/uap_{uap_counter}.js")
            uap_counter += 1
        
if __name__ == "__main__":
    main()
