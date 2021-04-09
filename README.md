# Search Data Breach `.tar.gz` files

The data breach `.tar.gz` files contains a lot of `.txt` files. This script search into `.txt` files a regexp pattern and output match lines to stdout.

This script use NodeJS Stream for an efficient memory usage.

## Running without installation

```bash
npx targz-search <pattern> <file.tar.gz>
```

## Install locally

```bash
# Use npm
npm install -g targz-search

# Use yarn
yarn global add targz-search
```

## Running

```bash
# Simple running
targz-search <pattern> <file.tar.gz>

# See more options
targz-search --help
```

## Optional: Use only shell tools for same effect

```bash
tar xOf <file.tar.gz> | grep -iE 'pattern'

# If problem with some files reported as binary. Add "a" option to grep (Caution).
tar xOf <file.tar.gz> | grep -aiE 'pattern'
```
