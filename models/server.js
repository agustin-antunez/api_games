const express = require('express')
const cors = require('cors')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3000
    this.API_KEY = process.env.API_KEY
    this.middleware()
    this.routes()
  }

  middleware () {
    this.app.use(cors())
    this.app.use(express.static('public'))
  }

  routes () {
    this.app.get('/', (req, res) => res.send('Hello and welcome to this page'))
    this.app.use('/api/v1/games', require('../routes/game.routes'))
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`Api escuchando en el puerto: ${this.port}`)
      console.log(`http://localhost:${this.port}`)
    })
  }
}

module.exports = Server
