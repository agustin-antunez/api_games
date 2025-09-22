const axios = require('axios')
const {request, response} = require('express')
require('dotenv').config();
const URL = process.env.URL_API
const API_KEY = process.env.API_KEY

const getGames = (req = request, res = response) => {
 
  console.log(`${URL}/api/games`)

  axios.get(`${URL}/api/games?key=${API_KEY}`)
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

const getGame = (req = request,res = response) => {
    const {id} = req.params
    axios.get(`${URL}/api/games/${id}?key=${API_KEY}`)
    .then((response)=> {
        const {data = []} = response

        res.status(200).json({
            message: 'ok',
            code:200,
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
    getGame,
    getGames

}