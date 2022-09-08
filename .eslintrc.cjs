module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-indent-props': [2, 4],
    'react/jsx-curly-spacing': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-closing-tag-location': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        ignorePackages: true,
        pattern: {
          'js': 'never',
          'ts': 'never',
          'jsx': 'never',
          'tsx': 'never',
        },
      }
    ],
    'no-console': 'off',
    'react/function-component-definition': 'off',
    'react/no-danger': 'off',
    '@typescript-eslint/return-await': 'off',
  },
};
