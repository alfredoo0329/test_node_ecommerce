const { Router } = require('express');
const router = Router();
//const express = require('express'); // Son lo mismo
//const router = express.Router();

router.get('/', (request, response) => {
    response.json({"name":"Jhon Doe"}); //manda un JSON
})

router.get('/home', (request, response) => {
    response.send("you are in home!"); //manda un String
})

module.exports = router;