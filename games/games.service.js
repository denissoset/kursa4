const db = require('_helpers/db');
const Game = db.Game;
const Image = db.Image;
const mongoose = require('mongoose');
module.exports = {
    getAll,
    getById,
    create,
    getImages
};
async function getAll() {
    return await Game.find().select();
}
async function create(gameParam) {
    if (await Game.findOne({ title: gameParam.title })) {
        throw 'Game with title "' + gameParam.title + '" is already exists';
    }
    const newGame = new Game(gameParam);
    await newGame.save();
}
async function getById(id) {
    return await Game.findById(id).select();
}
function CorrectType(el) {
     return mongoose.Types.ObjectId(el) ;
    }
async function getImages(id){
    id = CorrectType(id);
    return await Game.aggregate([
        { 
            $match : { "_id": id } 
        },
        {
          $lookup:
            {
              from: "images",
             localField: "_id",
              foreignField: "gameId",
              as: "images"
            } 
        }
     ])
}