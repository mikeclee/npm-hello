Hello World package for NPM registry
==============================

Steps Taken
-----------

1. Create account on [NPM website](https://www.npmjs.com) or on CLI with `npm adduser`
 * check by hitting `https://www.npmjs.org/~<username>`
1. Create new module/package
 1. `npm init` to setup the basic **package.json** information
 1. create/test the code
1. Authorize the development machine using `npm login`
1. Publish to registry with `npm publish` in the project directory
1. Check `http://npmjs.com/package/<package>`
1. Finally run `npm install <package>` to ensure the package is available for use

NPM Package Requirements
------------------------

Reference [NPM doc](https://docs.npmjs.com/getting-started/publishing-npm-packages)

* package.json
* **name** and **version** in the **package.json** file

Quick NPM Commands
------------------

* `npm config ls` or `npm get`
 * show the current configuration information pulled from *.npmrc*
* `npm publish`
 * publish the current directory's package
* `npm publish --tag beta`
 * publish to NPM with the *latest* tag, so it will not be auto installed
* `npm version <patch|minor|major>`
 * bump the **package.json** _version_ information
 * if executed in GIT repository, it will auto-create a tag as well
* `npm pack`
 * create a package - ZIP - of the project locally
 * local install for testing with `npm install <zip file name (absolute/related) path>`
* `npm install <package name>`
* `npm uninstall <package name>`
