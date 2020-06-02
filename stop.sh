#!/usr/bin/env bash

screen -S fuzzer1 -X at "#" stuff $'\003'
screen -S fuzzer2 -X at "#" stuff $'\003'
screen -S fuzzer3 -X at "#" stuff $'\003'
screen -S fuzzer4 -X at "#" stuff $'\003'
