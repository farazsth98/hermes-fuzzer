#!/usr/bin/env bash

rm -rf inputs*

if echo "$1" | grep -qE '^[0-9]+$'; then
	if echo "$2" | grep -qE '^[0-9]+$'; then
		for (( i=1; i<=$1; i++ ))
		do
			screen -S generator$i -dm dharma -grammar grammar/wasm.dg -storage inputs$i/ -format js -count $2 &
		done
	else
		echo "Usage: ./generate.sh <num_of_input_dirs> <num_of_test_cases_per_dir>"
		exit 1
	fi
else
    echo "Usage: ./generate.sh <num_of_input_dirs> <num_of_test_cases_per_dir>"
	exit 1
fi
