#!/usr/bin/env bash

if echo "$1" | grep -qE '^[0-9]+$'; then
	let num_of_input_dirs=`ls -l | grep inputs | wc -l`
	if [ $num_of_input_dirs -eq $1 ]; then
		for (( i=1; i<=$1; i++ ))
		do
			screen -S fuzzer$i -dm python3 fuzz.py inputs$i $i &
		done
	else
		echo "Error: Number of nodes must match number of input directories"
		exit 1
	fi
else
    echo "Usage: ./fuzz.sh <number_of_fuzzer_nodes>"
	exit 1
fi

