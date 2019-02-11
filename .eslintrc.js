module.exports = {
  extends: 'bitworkers',
  root:true,
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: 'parent|args|ctx|info' },
    ],
  },
}
