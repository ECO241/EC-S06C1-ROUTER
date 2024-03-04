// import express for the router
const express = require('express')

// special object from express
const router = express.Router()

// middleware that is specific to this router
// use this onbe if yout want to log all the requests to the router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

// define the root route ('/')
router.get('/', (req, res) => {
    res.send('Birds home page')
})

// define the /about route
router.get('/about', (req, res) => {
    res.send('About birds')
})

module.exports = router