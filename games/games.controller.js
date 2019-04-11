const express = require('express');
const router = express.Router();
const gameService = require('./games.service');
const Role = require('_helpers/role');
router.get('/games', getAll);
router.post('/games',createNewGame);
router.post('/:id',getImages);
module.exports = router;
function getAll(req, res, next) {
    gameService.getAll()
        .then(games => res.json(games))
        .catch(err => next(err));
}
function getImages(req, res,next){
    gameService.getImages(req.params.id)
    .then(games => res.json(games))
    .catch(err => next(err));
}
function createNewGame(req, res, next) {
    gameService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}
function getById(req, res, next) {
    gameService.getById(req.params.id)
        .then(games => games ? res.json(games) : res.sendStatus(404))
        .catch(err => next(err));
}