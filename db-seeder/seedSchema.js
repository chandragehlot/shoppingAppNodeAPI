var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

/*var schema = new Schema({
	productname: {type:String, require:true },
	category: {type:String, require:true },
	subcategory: {type:String, require:true },
	price: {type:Number, require:true },
	rating: {type:Number, require:true },
	trendcategory :{type:String, require:true },
	warrantyduration: {type:Number},
	imagespath :{ type:String, require:true }
});

module.exports = mongoose.model('Product', schema);*/

var schema = new Schema({
	username: {type:String},
	email: {type:String, require:true },
	userid: {type:String},
	password: {type:String, require:true }
});

schema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
}

schema.methods.validPassword = function(password){
	return bcrypt.compareSync(password,this.password);
}

schema.methods.aaa = function(){
	return 'aaa';
}

module.exports = mongoose.model('User', schema);
