var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({
	username: {type:String},
	email: {type:String, require:true },
	userid: {type:String},
	password: {type:String, require:true }
});

UserSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
}

UserSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password,this.password);
}

module.exports = mongoose.model('User',UserSchema);