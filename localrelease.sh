#!/usr/bin/env bash
cd projects/table/
ng build && npm run pack
cd ../..
cp projects/table/extstats-datatable-*.tgz ../repo