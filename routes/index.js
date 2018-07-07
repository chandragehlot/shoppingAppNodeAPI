var express = require('express');
var router = express.Router();
//import models
var category = require('../models/categories');
var product = require('../models/Product');


//import contollers
var productcontroller = require('../controllers/product.controller');


router.get('/getcategories',function(req,res,next){
	productcontroller.all_Categories(req,res,next)
});

router.get('/getproduct/newproduct', function(req,res,next){
	productcontroller.new_Product(req,res,next);
});

router.get('/getproduct/topselling', function(req,res,next){
	productcontroller.top_Selling(req,res,next);
});

router.get('/getproduct/accessories/allcategory', function(req,res,next){
	productcontroller.allcatagory(req,res,next);
});

// new
router.get('/getbrands',function (req,res,next) {
	productcontroller.brand_List_By_Catgory(req,res,next)
});

//new
router.get('/getbreadcrumb',function(req,res,next){
	productcontroller.breadcrumb_By_category(req,res,next);
});

module.exports = router;