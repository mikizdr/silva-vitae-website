import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig({
  languageOptions: {
    parser: tsParser,
    ecmaVersion: 2020,
    sourceType: 'module',
    parserOptions: { ecmaFeatures: { jsx: true } },
    globals: { ...globals.node, ...globals.browser },
  },
  plugins: {
    '@typescript-eslint': typescriptEslint,
    'simple-import-sort': simpleImportSort,
    'unused-imports': unusedImports,
    react: react,
  },
  extends: compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ),
  settings: {
    react: { version: 'detect' },
    'import/resolver': { typescript: { project: './tsconfig.json' } },
  },
  rules: {
    // 'simple-import-sort/imports': [
    //   'error',
    //   {
    //     groups: [
    //       ['^\\u0000'], // side effects
    //       ['^react', '^@?\\w'], // packages
    //       ['^[^.]'], // absolute imports
    //       ['^\\.'], // relative imports
    //     ],
    //   },
    // ],
    // 'simple-import-sort/exports': 'error',
    // 'unused-imports/no-unused-imports': 'error',
    'react/react-in-jsx-scope': 'off',
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: false,
        fixStyle: 'separate-type-imports',
      },
    ],
  },
});
