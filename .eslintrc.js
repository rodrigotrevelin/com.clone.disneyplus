module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@next/next/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:storybook/recommended",
      "plugin:react/jsx-runtime"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ['react', '@typescript-eslint'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  };
