module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": "eslint:recommended",

    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "eqeqeq": "off",
        "curly": "error",
        "quotes": ["error", "off"]
    }
};