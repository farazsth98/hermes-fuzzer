#!/usr/bin/env python3

import subprocess, os, shutil, sys

TIMEOUT = 20 # seconds

def main():
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

    # Used to name crash and timeout test cases
    crashes = timeouts = num = 0

    for f in file_list:
        num += 1
        filename = f"./{sys.argv[1]}/{f}"
        print(f"\r######## Test case {num} - {f} ########", end="", flush=True)
        try:
            child = subprocess.run(["./hermes/build_asan/bin/hermes", filename], timeout=TIMEOUT)
            exit_code = child.returncode
            if exit_code != 0:
                crashes += 1
                crash_file = f"crash{crashes}.js"
                print(f"\nCrashed. Saved as {crash_file}")
                shutil.copyfile(filename, f"./crashes/n{node_num}_{crash_file}.js")
        except subprocess.TimeoutExpired:
            timeouts += 1
            crash_file = f"timeout{timeouts}.js"
            print(f"\nTimed out. Saved as {crash_file}")
            shutil.copyfile(filename, f"./timeouts/n{node_num}_{crash_file}")
            

if __name__ == "__main__":
    main()
