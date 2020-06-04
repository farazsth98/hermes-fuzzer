#!/usr/bin/env bash

[ ! -d "crashes" ] && mkdir crashes
[ ! -d "logs" ] && mkdir logs
[ ! -d "coverage" ] && mkdir coverage
[ ! -d "coverage/html" ] && mkdir coverage/html

if [ ! -d "dynamorio" ]
then
	echo "Installing DynamoRIO"
	wget https://github.com/DynamoRIO/dynamorio/releases/download/cronbuild-8.0.18410/DynamoRIO-Linux-8.0.18410.tar.gz
	tar -xvf DynamoRIO-Linux-8.0.18410.tar.gz
	rm DynamoRIO-Linux-8.0.18410.tar.gz
	mv DynamoRIO-Linux-8.0.18410 dynamorio
fi
