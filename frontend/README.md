# TODO

- put ved lagring
  - ta med participant.id i form
- oversette filnavn og katalognavn til engelsk
- gjøre header i tabell sticky
- NSK logo øverst til venstre
- breadcrumb i header?
    - f.eks. "Sjusjørennet spring / brikkeendring"  
- valider kontinuerlig i brikkeendring-dialog
- logo som fav.icon
- debounce funksjon slik at ikke søket hamrer på databasen
- bedre mocking vha prism
- legg på footer
    - logo 
    - github lenke
    - lisens (APGL?)
- dokumentasjon
    - hvordan man setter opp backup av sqlserver
    - hvordan man gjør restore av en backup
    - hvordan man setter opp google drive

# Generer typescript schema fra Open-API

    npm run generate-types

# Testdata

    json-server --watch db.json

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
