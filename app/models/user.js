
// create a schema
var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    first_name: {
        type: String,
        default: ''
    }, 
    last_name: {
        type: String,
        default: ''
    }, 

});

