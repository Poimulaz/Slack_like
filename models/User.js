/**
 * Created by Pierre on 04/12/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
    superuser : Boolean,
    facebook : {
        id : String,
        token : String,
    },
    twitter : {
        id : String,
        token : String,
    },
    google : {
        id : String,
        token : String,
    }
});

var User = mongoose.model('User', UserSchema);

module.exports = User;