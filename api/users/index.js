const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

let users = [
    {
        id: 1,
        name: 'alice'
    },
    {
        id: 2,
        name: 'bek'
    },
    {
        id: 3,
        name: 'chris'
    }
]

router.get('/users', controller.index);

router.get('/users/:id', controller.show);

router.delete("/users/:id", controller.destroy);

router.post("/users", controller.create);

module.exports = router;
