const express = require('express');
const router = express.Router();
const path = require('path');
// routes
router.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '../', 'index.html'));
})
router.get('/login', function(req,res){
    res.sendFile(path.join(__dirname, '../public/Views/', 'login.html'));
})
router.get('/catalog', function(req,res){
    res.sendFile(path.join(__dirname, '../public/Views/', 'catalog.html'));
})
router.get('/catalog/*', function(req,res){
    res.sendFile(path.join(__dirname, '../public/Views/', 'gamepage.html'));
})
module.exports = router;
