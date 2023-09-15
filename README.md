# Template for

commonjs + eslint project

# Compatible Versions:

### Node

- v19.7.0

### ESLint

- 8.48.0

# Initialise project

```bash
npm init
```

# nodemon

- Watches files and restarts the server in case of changes.

## Install

```jsx
npm i nodemon
```

## nodemon.json

- Sample configuration

```json
{
  "restartable": "rs",
  "ignore": [".git", "node_modules/**/node_modules"],
  "verbose": true,
  "execMap": {
    "js": "node --harmony"
  },
  "events": {
    "restart": "osascript -e 'display notification \"App restarted due to:\n'$FILENAME'\" with title \"nodemon\"'"
  },
  "watch": ["test/fixtures/", "test/samples/"],
  "env": {
    "NODE_ENV": "development"
  },
  "ext": "js,json"
}
```

### _Reference_

[How To Restart Your Node.js Apps Automatically with nodemon | DigitalOcean](https://www.digitalocean.com/community/tutorials/workflow-nodemon)

# ESLint

## Install

```bash
npm i eslint
```

## Configure eslint

```bash
npm init @eslint/config
```

✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · commonjs
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · node
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · YAML

## Add Scripts

- Add scripts in `package.json`

```json
"scripts": {
    "lint:setup": "npm init @eslint/config",
    "lint:check": "eslint .",
    "lint:fix": "eslint --fix .",
  },
```

## Debug

- check logs in `output` ⇒ `Eslint`

# Add pre-commit hook

- Adding this hook ensures that eslint or any other custom script runs before code commit.

## Install husky

- creates a pre-commit hook to run `npm run lint:check`

```bash
npm i -D husky
```

- Install config package
  - creates a `.husky` folder with `git pre-commit hook`

```bash
npx husky-init
```

- Configure `pre-commit` in `.husky` folder

```yaml
npm run lint:check
npm run lint:fix
# npx lint-staged
```

### Add Scripts

- Run this script after `npm i` to setup husky

```json
"scripts": {
    "prepare": "husky install"
  },
```

## Install lint-staged

- adds capability to run `npm run lint:check` only on staged files

```bash
npm i -D lint-staged
```

- create `.lintstagedrc.yml` for configuration

```yaml
"*":
  - npm run lint:check
  - npm run lint:fix
```

# Final Configuration

## nodemon.json

```json
{
  "restartable": "rs",
  "ignore": [".git", "node_modules/**/node_modules"],
  "verbose": true,
  "watch": ["src/"],
  "ext": "js,json"
}
```

## package.json

```json
{
  "name": "with-commonjs-eslint",
  "version": "1.0.0",
  "description": "template project for express + nodejs + commonjs + eslint",
  "main": "src/app.js",
  "scripts": {
    "dev": "cross-env NODE_ENV=development nodemon",
    "prod": "cross-env NODE_ENV=production nodemon",
    "lint:setup": "npm init @eslint/config",
    "lint:check": "eslint .",
    "lint:fix": "eslint --fix .",
    "test": "jest",
    "prepare": "npm i husky install"
  },
  "repository": {
    "type": "git",
    "url": ""
  },
  "keywords": ["express", "nodejs", "dotenv", "crossenv", "commonjs", "eslint"],
  "author": "deltacap019",
  "license": "ISC",
  "dependencies": {
    "axios": "1.5.0",
    "cross-env": "7.0.3",
    "dotenv": "16.3.1",
    "express": "4.18.2",
    "express-async-handler": "1.2.0",
    "install": "^0.13.0",
    "joi": "17.10.1",
    "mongoose": "7.5.0",
    "node-cache": "5.1.2"
  },
  "devDependencies": {
    "eslint": "8.48.0",
    "eslint-config-airbnb-base": "15.0.0",
    "eslint-plugin-import": "2.28.1",
    "eslint-plugin-security": "1.7.1",
    "husky": "^8.0.3",
    "lint-staged": "14.0.1",
    "nodemon": "3.0.1"
  }
}
```

## husky pre-commit

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint:check
npm run lint:fix
# npx lint-staged
```

# Template

```bash
npx degit "https://github.com/templates-deltacap019/with-commonjs-eslint.git" "my_proj"
```
