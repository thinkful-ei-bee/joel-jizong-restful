require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const winston = require('winston');
const bookmarkRouter = require('./bookmark/bookmark-router')
const authMiddleware = require('./auth')
const app = express()

const morganOption = (process.env.NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

//app.use(express.json())
//app.post("/foo", (req, res) => { res.json(req.body) });

app.get("/", (req, res) => res.json({hello: "universe"}));

app.use(authMiddleware)
app.use('/api', bookmarkRouter)

app.use(function errorHandler(error, req, res, next) {
  let response
  if (process.env.NODE_ENV === 'production') {
    response = { error: { message: 'server error' } }
  } else {
    console.error(error)
    response = { message: error.message, error }
  }
  res.status(500).json(response)
})

module.exports = app