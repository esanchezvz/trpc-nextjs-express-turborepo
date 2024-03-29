/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  extends: ['turbo', 'eslint:recommended', 'prettier'],
  env: {
    es2022: true,
    node: true,
  },
  rules: {
    'turbo/no-undeclared-env-vars': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'turbo',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'prettier',
      ],
      env: {
        es2022: true,
        node: true,
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: true,
      },
      plugins: ['@typescript-eslint', 'import'],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/consistent-type-imports': [
          'warn',
          { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
        ],
        '@typescript-eslint/no-misused-promises': [2, { checksVoidReturn: false }],
        'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      },
    },
  ],
  ignorePatterns: [
    '**/.eslintrc.cjs',
    '**/*.config.js',
    '**/*.config.cjs',
    '**/postcss.js',
    '**/postcss.config.js',
    '.next',
    'dist',
    'pnpm-lock.yaml',
  ],
  reportUnusedDisableDirectives: true,
};

module.exports = config;
