const { Router } = require('express')
const { getGameID, getGames, getGamesFilter } = require('../controllers/games.controller')

const routes = Router()

routes.get('/filtro', getGamesFilter)
routes.get('/', getGames)
routes.get('/:id', getGameID)

module.exports = routes
