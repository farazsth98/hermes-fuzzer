#!/usr/bin/env bash

read -p "This will delete an existing \"dynamorio\" directory and redownload it. Proceed? (y/n)" -n 1 -r
echo

if [[ $REPLY =~ ^[Yy]$ ]]
then
	rm -rf dynamorio
	echo "Installing DynamoRIO"
	wget https://github.com/DynamoRIO/dynamorio/releases/download/cronbuild-8.0.18410/DynamoRIO-Linux-8.0.18410.tar.gz
	tar -xvf DynamoRIO-Linux-8.0.18410.tar.gz
	rm DynamoRIO-Linux-8.0.18410.tar.gz
	mv DynamoRIO-Linux-8.0.18410 dynamorio
fi
