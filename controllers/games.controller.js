const axios = require('axios')
const { request, response } = require('express')
const URL = process.env.URL_API
const API_KEY = process.env.API_KEY

const getGames = (req, res) => {
  axios.get(`${URL}?key=${API_KEY}`)
    .then((response) => {
      const { data = [] } = response

      res.status(200).json({
        message: 'Ok',
        code: 200,
        data
      })
    })
    .catch((e) => {
      res.status(500).json({
        message: `Error: ${e} `,
        code: 500
      })
    })
}

const getGamesFilter = (req, res) => {
  const { search, genres, pageSize = 10 } = req.query

  if (!search && !genres) {
    return res.status(400).json({ error: 'Se debe buscar por nombre o por genero' })
  }

  const params = new URLSearchParams()

  if (search) {
    params.append('search', search)
  }
  if (genres) {
    params.append('genres', genres)
  }

  params.append('page_size', pageSize.toString())
  params.append('key', API_KEY)

  const urlFilter = `${URL}?${params.toString()}`

  axios.get(urlFilter)
    .then((response) => {
      const { data = [] } = response
      res.status(200).json({
        message: 'Ok',
        code: 200,
        data
      })
    })
    .catch((e) => {
      res.status(500).json({
        message: `Error: ${e} `,
        code: 500
      })
    })
}

const getGameID = (req = request, res = response) => {
  const { id } = req.params
  axios.get(`${URL}/${id}?key=${API_KEY}`)
    .then((response) => {
      const { data = [] } = response

      res.status(200).json({
        message: 'ok',
        code: 200,
        data
      })
    })
    .catch((e) => {
      res.status(500).json({
        message: `Error: ${e}`,
        code: 500
      })
    })
}

module.exports = {
  getGameID,
  getGames,
  getGamesFilter

}
