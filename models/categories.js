var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    catagoriname: {type: String, required: true},
    description: {type: String, required: true},
    imageurl: {type: String, required: true},
    redirectiontext: {type: String, required: true}
});

module.exports = mongoose.model('Catagory', schema);
