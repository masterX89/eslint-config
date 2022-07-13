# @xhksun/eslint-config

Fork [antfu/eslint-config](https://github.com/antfu/eslint-config). The following is the same as Antfu's eslint-config

- Single quotes
- Auto fix for formatting (aimed to be used standalone without Prettier)
- TypeScript, Vue, React out-of-box
- Lint also for json, yaml, markdown
- Sorted imports, dangling commas for cleaner commit diff
- Reasonable defaults, best practices, only one-line of config

But change these following preset

- no-semi in Vue
- semi in React
- multi-line in curly

## Usage

### Install

#### Vue

```bash
pnpm add -D eslint @xhksun/eslint-config-vue
```

#### React

```bash
pnpm add -D eslint @xhksun/eslint-config-react
```

### Config `.eslintrc`

#### Vue

```json
{
  "extends": "@xhksun/eslint-config-vue"
}
```

#### React

```json
{
  "extends": "@xhksun/eslint-config-react"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## LICENSE

MIT