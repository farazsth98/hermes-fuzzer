#!/usr/bin/env bash

rm -rf coverage/html

echo "Generating coverage data..."

# Generate coverage.info from drcov.*.log files
dynamorio/tools/bin64/drcov2lcov -dir coverage -output coverage/coverage.info -src_filter hermes/hermes/lib/ 2>/dev/null 1>/dev/null

# Convert coverage.info into a set of HTML files viewable through the browser
dynamorio/tools/bin64/genhtml coverage/coverage.info --output-directory coverage/html 2>/dev/null 1>/dev/null

echo "========================================================="
echo "Coverage data generated. Visit localhost:8000 to view it!"
echo "========================================================="

# Host a python3 http.server on port 8000
cd coverage/html
python3 -m http.server 8000 2>/dev/null 1>/dev/null
