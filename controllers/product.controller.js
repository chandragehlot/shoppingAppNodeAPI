//import models
var category = require('../models/categories');
var product = require('../models/Product');
var categorytree = require('../models/categorytree');

var responseformator = require('../common-methods/response-formater');

exports.allcatagory = function(req,res,next){
    product.find({},{'_id': false},function(err,items){
        responseformator(res,items);
	});
}

exports.top_Selling = function(req,res,next){
	product.find({},{"trendcategory":"topselling"},function(err,items){
        responseformator(res,items);
	});
}

exports.new_Product = function (req,res,next) {
    product.find({"trendcategory":"new"},function(err,items){
        responseformator(res,items);
	});  
}

exports.all_Categories = function (req,res,next) {
    category.find({},function(err,items){
        responseformator(res,items);
	});	
}

exports.brand_List_By_Catgory = function (req,res,next) {
    var reqparam = req.query.category; 
    var dbquery = [
        {
            $match:{ "category":reqparam }
        },
        {
            $group:{ _id:"$brand","count":{ $sum:1 }}
        },
        {
            $project:{
                _id:0,
                "brand":"$_id",
                "no_of_items":"$count"
            }
        }
    ];
    var cb = function(err,db_result){
        responseformator(res,db_result);
    }
    product.aggregate(dbquery,cb);
}

exports.breadcrumb_By_category = function (req,res,next) {
    var reqparam = req.query.category;

    categorytree.find({_id:reqparam},function(err,db_result1){
        var consolidate_result;
        db_result1 = `${db_result1[0].path},${reqparam}`;
        db_result1 = db_result1.split(",");
        product.find({"category":reqparam}).count().exec(function (err,db_result2) {
            consolidate_result = {
                "breadcrumb": db_result1,
                "category_count" : db_result2
            }
            responseformator(res,consolidate_result);
        })
        
    });
}

exports.categoryList_With_Count = function(req,res,next){
    var dbquery = [
        {
            $group:{_id:"$category",count:{"$sum":1}}
        },
        {
            $project:{
                _id:0,
                "categoryname":"$_id",
                "count":"$count"
            }
        }
    ];
    var cb = function(err,db_result){
        responseformator(res,db_result);
    }
    product.aggregate(dbquery,cb);  
}
