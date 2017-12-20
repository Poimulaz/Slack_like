/**
 * Created by Pierre on 04/12/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = mongoose.model('User');

var ChannelSchema = new Schema({
    name : String,
    users : [{
        user : {type: mongoose.Schema.Types.ObjectId, ref: "User"},
        rights : Boolean,
        banned : Boolean,
        kicked : Boolean,
        censured : Boolean
    }],
    message : [{
        content : String,
        author : String,
        date : Date,
        published : String,
        //user : {type: mongoose.Schema.Types.ObjectId, ref: "User"},
        emot : [String]
    }],
    master : {type: mongoose.Schema.Types.ObjectId, ref: "User"}
});

var Channel = mongoose.model('Channel', ChannelSchema);

module.exports = Channel;