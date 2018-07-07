var express = require('express');
var router = express.Router();
var user = require('../models/user');


router.post('/login',function(req,res,next){
	
	var useremail = req.body.email;
	var userpwd = req.body.password;

	if(useremail && userpwd){
		console.log("useremail && userpwd = true");
		user.findOne({'email':useremail},function(err,dbuserdata){
			if(err){
/*				res.json({
					statuscode: 500,
					statusText:'ERROR',
					message:"something went wrong with database",
					data:null					
				});*/
				res.json({
					data:null,
					status:500
				});		
			}
			if(!dbuserdata){
				console.log("!dbuserdata = true"); 
/*				res.json({
					statuscode: 404,
					statusText:'ERROR',
					message:"user does not exist",
					data:null		
				});*/
				res.json({
					data:null,
					status:404
				});
			}else if(dbuserdata.validPassword(userpwd)){
				console.log("password valid");
/*				res.json({
					statuscode: 200,
					statusText:'SUCCESS',
					message:"user authenticated",
					data:'usermatched'		
				});*/
				res.json({
					data:dbuserdata,
					status:200
				});
			}
		});
	}else{
		console.log("useremail && userpwd = false");
/*		res.json({
			statuscode: 400,
			statusText:'ERROR',
			message:"req body params not found",
			data:null		
		});*/
		res.json({
			data:null,
			status:400
		});
	}
});

module.exports = router;