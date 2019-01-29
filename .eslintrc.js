module.exports = {
  extends: 'bitworkers',
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: 'parent|args|ctx|info' },
    ],
  },
}
