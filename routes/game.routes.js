const {Router} = require('express')
const {getGame, getGames} = require('../controllers/games.controller')

const routes = Router()

routes.get('/', getGames)
routes.get('/:id', getGame);

module.exports = routes

