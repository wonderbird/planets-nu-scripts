# Node.js Starter

![Build Status Badge](https://github.com/wonderbird/nodejs-starter/workflows/Node.js%20CI/badge.svg)

This repo is a template for new Node.js projects. Simply fork it :-)
If you have forked it already, see https://deanmalone.net/post/how-to-fork-your-own-repo-on-github/ .

## Development

### Build the Project

```sh
npm install
npm run test
npm run lint
```

To run the application

```sh
npm run start
```

To continuously monitor the tests while developing

```sh
npm run test:watch
```

Before pushing to github, please run all tests and the linter

```sh
npm run test
npm run lint
```

### Analyze the Code Complexity

```sh
npm run complexity
```

The command above uses the [complexity-report-html](https://github.com/igneel64/complexity-report-html) module to generate two reports

* `.complexity-report/app.html` shows an overview of complexity by file and function for the `app` folder
* `.complexity-report/test.html` shows an overview of complexity by file and function for the `test` folder
