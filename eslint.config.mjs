import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from "eslint-plugin-react";
import configPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        rules: {
            'no-var': 'error',
            semi: 'error',
            indent: 'error',
            'no-multi-spaces': 'error',
            'space-in-parens': 'error',
            'no-multiple-empty-lines': 'error',
            'prefer-const': 'error',
            'no-use-before-define': 'error',
        },
    },
    configPrettier,
];
