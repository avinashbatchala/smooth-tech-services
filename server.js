const express = require('express')
const path = require('path')
const history = require('connect-history-api-fallback')
const serveStatic = require('serve-static')

const app = express()

// Handle history mode routing in Vue.js
app.use(history())
app.use(serveStatic(path.join(__dirname, 'dist')))

const port = process.env.PORT || 8080
app.listen(port)
console.log(`Server started on port ${port}`)