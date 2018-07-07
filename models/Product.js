var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productschema = new Schema({
	productname: {type:String, require:true },
	category: {type:String, require:true },
	price: {type:Number, require:true },
	rating: {type:Number, require:true },
	trendcategory : {type:String, require:true },
	warrantyduration: {type:Number},
	imagespath : {type:String, require:true }
});

module.exports = mongoose.model('Product',productschema);


/*	
	productname: laptop \camera\ earphone\ headphone...,
	category: laptops\camera\accesories,
	price: 90000,
	rating: 1\2\3\4\5,
	trendcategory: topselling\new\old
*/