const express = require('express');
const router = express.Router();
const controller = require("./user.controller");

router.get('/', (req, res) => {
    return res.json(users);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!id) {
        return res.status(400).json({error: 'Incorrect id'});
    }

    let user = users.filter(user => user.id === id)[0]
    if (!user) {
        return res.status(404).json({error: 'Unknown user'});
    }

    return res.json(user);
});

router.delete("/:id", (req, res) => {

    const id = parseInt(req.params.id, 10);
    console.log(id);
    if(!id){
        return res.status(400).json({error: 'Incorrect id'});
    }
    console.log('pass incorrect id block');

    const userIdx = users.findIndex(user => user.id === id);
    if(userIdx === -1){
        return res.status(404).json({error: 'Unknown user'});
    }

    users.splice(userIdx, 1);
    res.status(204).send();
});

router.post("/", (req, res) => {
    const name = req.body.name || '';

    console.log(name);

    if(!name.length){
        return res.status(400).json({error: 'Incorrect name'});
    }

    const id = users.reduce((maxId, user) => {
        return user.id > maxId ? user.id : maxId;
    }, 0)+1;

    console.log('after reduce' + id);

    const newUser = {
        id: id,
        name: name
    };

    users.push(newUser);

    console.log('after reduce / ' + newUser.name + " / " + newUser.id);

    return res.status(201).json(newUser);
});

module.exports = router;
