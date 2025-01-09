import globals from 'globals';
import pluginJs from '@eslint/js';
import configPrettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'no-var': 'error',
      semi: ['error', 'always'],
      indent: 'error',
      'no-multi-spaces': 'error',
      'space-in-parens': 'error',
      'no-multiple-empty-lines': 'error',
      'prefer-const': 'error',
      'no-use-before-define': 'error',
      'prettier/prettier': ['error', { singleQuote: true, semi: true }],
    },
  },
  pluginJs.configs.recommended,
  configPrettier,
];
