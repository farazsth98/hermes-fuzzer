#!/usr/bin/env bash

rm -rf inputs*
mkdir inputs{1,2,3,4}

screen -S generator1 -dm dharma -grammar grammar/js.dg -storage inputs1/ -format js -count 250000 &
screen -S generator2 -dm dharma -grammar grammar/js.dg -storage inputs2/ -format js -count 250000 &
screen -S generator3 -dm dharma -grammar grammar/js.dg -storage inputs3/ -format js -count 250000 &
screen -S generator4 -dm dharma -grammar grammar/js.dg -storage inputs4/ -format js -count 250000 &
