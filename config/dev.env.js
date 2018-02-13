var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  HB_ENDPOINT: '"http://localhost:3000/hb"'
})
