module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['simple-import-sort', 'node-import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:solid/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:storybook/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      files: ['./**/*.{js,cjs}'],
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      plugins: ['jest'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:jest-dom/recommended',
      ],
      rules: { 'jest/no-deprecated-functions': 'off' },
    },
    {
      files: ['**/e2e/**/*.[jt]s?(x)'],
      rules: {
        'jest/no-done-callback': 'off',
        'jest/require-hook': 'off',
        'testing-library/prefer-screen-queries': 'off',
      },
    },
  ],
  rules: {
    // stylistic
    'object-shorthand': ['error', 'always'],
    'func-style': ['error', 'expression'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'node-import/prefer-node-protocol': 'error',
    'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'coverage/',
    'vite.config.ts.*.mjs',
    'storybook-static/',
  ],
}
