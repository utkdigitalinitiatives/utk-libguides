## Introduction

This tool compiles the source stylesheet file to be uploaded to LibGuides at https://utk.libapps.com/libguides/lookfeel.php?action=1. Never directly edit the `.css` files compiled. Instead, make edits the source files located at `./src/scss/*` while running the compiling task(s).

## Requirements
- `node --version` 8.11.1 or greater
- `npm --version` 5.6.0 or greater
- `npx --version` 9.7.1 or greater

## Install
- `cd <install-directory>`
- `npm install`
- `npm install --global gulp-cli`

## Compiling
- One time compile: `gulp build`
- Watch task: `gulp start`

