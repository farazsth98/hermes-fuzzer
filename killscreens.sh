#!/usr/bin/env bash

let num_of_input_dirs=`ls -l | grep inputs | wc -l`

for (( i=1; i<=$num_of_input_dirs; i++ ))
do
	screen -S fuzzer$i -p 0 -X quit
done

for (( i=1; i<=$num_of_input_dirs; i++ ))
do
	screen -S generator$i -p 0 -X quit
done
