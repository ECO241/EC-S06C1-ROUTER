const express = require('express');

// objetivo especial enrutador
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Entrando al enrutador Usuarios')
    next()
});

// return all users
router.get('/', (req, res) => {
    res.send('Estos son todos los usuarios!!! ')
})

// return all users
router.get('/:id', (req, res) => {
    res.send('Te presento a pepito de id:' + req.params.id);
})

module.exports = router


