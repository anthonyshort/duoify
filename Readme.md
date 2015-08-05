# Duoify

[![version](https://img.shields.io/npm/v/duoify.svg?style=flat-square)](https://www.npmjs.com/package/duoify) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

Allows Browserify bundles to be used by Duo by rewriting the `require` statements. This is useful when you have a module that is written using modules from npm and you want your package to be consumed by both npm and Duo.

```
npm install duoify
```

## Usage

```
browserify index.js -t duoify > build.js
```

You'll probably need to add a `component.json` file to your project so that Duo loads the correct file.

```json
{
    "name": "my-module",
    "main": "build.js"
}
```

