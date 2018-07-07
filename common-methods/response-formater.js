module.exports = function(res,dbresponse){
    
    var responseObj  = {
        statuscode: 200,
        statusText:'SUCCESS',
        message:"web service executed successfully",
        data:dbresponse
    }
    res.json(responseObj);
}