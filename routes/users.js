const express = require('express')
const userService = require('../services/user-service')
const router = express.Router()

router.get('/', async (req, res, next) => {
  res.send('respond with a resource')
})

router.post('/', async (req, res, next) => {
  try {
    const result = await userService.save(req.body)
    res.send({ message: result })
  } catch (error) {
    res.status(error.statusCode || 500).send({ message: error.message })
  }
})

module.exports = router
