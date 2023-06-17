# Node.js Starter

![Build Status Badge](https://github.com/wonderbird/planets-nu-scripts/workflows/Node.js%20CI/badge.svg)

User scripts to enhance the experience of the https://planets.nu strategy game.

## Development

### Use the Project in Tampermonkey

#### Prerequisites

To connect tampermonkey to [app/main.js](./app/main.js), create a new Tampermonkey script and copy-paste the
contents of [app/tampermonkey-proxy.js](./app/tampermonkey-proxy.js) into it.

#### Invoke the User Script

- To host [app/main.js](./app/main.js) on http://localhost:8080/main/app.js, run the http server

  ```shell
  npm start
  ```

- Open https://planets.nu
- Open the developer console in chrome
- Verify that the log message `Welcome to Stefan's Planets.nu scripts` is shown

HINT: When changing the [app/main.js](./app/main.js) script, you might need to reload the page twice or wait for three
seconds until the changes are detected by the http server.

### Build the Project

```sh
npm install
npm run test
npm run lint
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
