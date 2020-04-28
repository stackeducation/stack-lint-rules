module.exports = {
  "env": { "es6": true, "node": true, "browser": true },
  "extends": "eslint:recommended",
  "extends": "airbnb",
  "parserOptions": {
    "ecmaFeatures": { "jsx": true },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
    "arrow-parens": [2, "as-needed", { "requireForBlockBody": true }],
    "camelcase": 0,
    "eqeqeq": ["error", "always"],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "jsx-a11y/label-has-for": 0,
    "linebreak-style": ["error", "unix"],
    "max-len": ["error", { "code": 120, "ignoreComments": true, "ignoreTrailingComments": true }],
    "object-curly-newline": ["error", { "multiline": true, "minProperties": 5, "consistent": true }],
    "operator-linebreak": ["error", "after", { "overrides": { "?": "before", ":": "before" } }],
    "react/prop-types": 0,
    "semi": ["error", "never"],
    "quotes": ["error", "single"],
  }
};
