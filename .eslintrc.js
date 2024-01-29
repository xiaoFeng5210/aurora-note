module.exports = {
  "env": {
    es2021: true,
    node: true,
    jest: true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
    // "eslint:recommended",
    // "plugin:react/recommended",
    // "plugin:react-hooks/recommended",
    // "plugin:@typescript-eslint/eslint-recommended",
    // "plugin:@typescript-eslint/recommended",
    // "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    // "project": "@typescript-eslint/parser"
  },
  "plugins": [
    "@typescript-eslint",
    "react",
  ],
  "rules": {
    "indent": ["error", 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double", { avoidEscape: true }],
    "semi": ["error", "always"],
    "no-empty-function": "off",
    // "@typescript-eslint/no-empty-function": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": "off",
  }
};
