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
        res.render('channels/List', { channels: items });
    });
});

//demande acces a un channel
router.get('/:id', function(req, res, next){
    Channel.findById({_id : req.params.id}, function(err, item){
        res.render('Channels/View', {channel: item});
    });
});

//crée un channel
router.post('/', function(req, res, next){
    var channel = new Channel();
    channel.name = req.body.name;
    channel.master = req.user;

    Channel.create(channel, function(err, item) {
        res.redirect("/channels");
    });
});

router.post('/:id', function(req, res, next){
    Channel.findById({_id : req.params.id}, function(err, item){
        item.message.push({content : req.body.content,author : req.user,date : new Date(),published : true});
        item.save(function(err, item) {
            console.log(err);
        });
        res.redirect("/channels/" + item.id);
    });
});

module.exports = router;