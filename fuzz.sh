#!/usr/bin/env bash

screen -S fuzzer1 -dm python3 fuzz.py inputs1 1 &
screen -S fuzzer2 -dm python3 fuzz.py inputs2 2 &
screen -S fuzzer3 -dm python3 fuzz.py inputs3 3 &
screen -S fuzzer4 -dm python3 fuzz.py inputs4 4 &
