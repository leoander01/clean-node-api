module.exports = {
  '*.ts': [
    'eslint "src/**" --fix',
    'yarn test:staged',
  ]
}