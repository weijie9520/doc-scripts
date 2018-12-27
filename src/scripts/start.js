const serverConfig = require('../webpack/server')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const openBrowser = require('react-dev-utils/openBrowser')
const log = require('../log')

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000

const HOST = process.env.HOST || 'localhost'

module.exports = () => {
  const complier = webpack(serverConfig(DEFAULT_PORT))
  new WebpackDevServer(complier, {
    publicPath: '/',
    quiet: true,
    hot: true
  }).listen(DEFAULT_PORT, HOST, err => {
    if (err) {
      return log.error(err)
    }
    openBrowser(`http://${HOST}:${DEFAULT_PORT}`)
  })
}