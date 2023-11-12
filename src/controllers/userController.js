const express = require('express');
const router = express.Router();

const userService = require('../services/userService');

// #region Apis

router.get('/users', async (req, res) => {
    try {
        const user = await userService.GetAll();

        res.status(200).send(user);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }

});

router.get('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const user = await userService.getUserById(id);
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }

});

router.post('/users', async (req, res) => {
    try {
        const user = await userService.CreateUser(req.body);
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }

});

router.put('/users/:id', async (req, res) => {
    try {

        let id = req.params.id;
        const user = await userService.UpdateUser(req.body);

        res.status(200).send(user);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }

});

// #endregion

module.exports = router;