const express = require('express');

const routes = new express.Router();

routes.get('/', (req, res)=>{
    return res.status(200).send(`Hello ${req.query.name}`)
})

module.exports = routes;