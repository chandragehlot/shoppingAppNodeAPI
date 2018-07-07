var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    _id: {type: String, required: true},
    path: {type: String, required: true}
});

module.exports = mongoose.model('Catagorytree', schema);
