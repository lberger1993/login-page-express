
// create a schema
var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    email_address: {
        type: String,
        default: ''
    }

});

