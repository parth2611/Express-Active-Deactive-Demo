var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myschema = new Schema({
    user_name: String,
    user_gender: String,
    user_dob: String,
    user_mobile: String,
    user_email: String,
    user_password: String,
    user_isadmin: Boolean,
    user_is_block : Boolean,
    user_joindate : {type: Date, default: Date.now},

});

module.exports = mongoose.model('users', myschema);