# A vitest demo project

### Install

#### Install `eslint`

```
npm install eslint --save-dev
npm init @eslint/config   # interactive
```

```
"scripts": {
    "test": "vitest",
    "lint": "eslint ."
},
```

### Problems?

#### Warning seen when running `npm test`

```
The CJS build of Vite's Node API is deprecated. See https://vitejs.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.
```

> Make sure that the project is compatible with ESM
>
> . add `"type": "module"` to the `package.json` file
>
> . replace `require` with `import` in the project files and in config files
