#!/usr/bin/env bash

rm -rf dist/*
npm run build --prod
cd dist/table
npm publish
