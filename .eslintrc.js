module.exports = {
  extends: 'standard-with-typescript',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    quotes: ['error', 'single'],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/method-signature-style': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
  },
}
