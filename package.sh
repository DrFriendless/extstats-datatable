#!/usr/bin/env bash

rm extstats-datatable-*.tgz
npm run build --production
cd dist/table
npm pack
cp extstats-datatable-*.tgz ../..
cd ../..
cp extstats-datatable-*.tgz ../repo
