module.exports = {
  hooks: {
    'pre-commit': 'npm run lint:staged',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS'
  }
}
