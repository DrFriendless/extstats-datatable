#!/usr/bin/env bash
cd projects/table/
ng build && npm run pack && npm publish --tag latest
