/**
 * Created by Pierre on 04/12/2017.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Channel = mongoose.model('Channel');

/* GET users listing. */
//affiche les channels
router.get('/', function(req, res, next) {
    Channel.find({},function(err,items){
        res.render('Channels/List', { channels: items });
    });
});

//demande acces a un channel
router.get('/:id', function(req, res, next){
    Channel.findById({_id : req.params.id}, function(err, item){
        res.render('Channels/View', {channel: item});
    });
});

//post un commentaire
router.post('/:id', function(req, res, next){

});

module.exports = router;