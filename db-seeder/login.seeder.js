var express = require('Express');
var app = express();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var seedModel = require('./seedSchema');

mongoose.connect('mongodb://localhost:27017/shoppingServices',function(){
    console.log("mongo db connected");
});

var SeedArr = [
    new seedModel({
        username: null,
        email: "user1@gmail.com",
        userid: null,
        password: "password1"
    }),
    new seedModel({
        username: null,
        email: "user2@gmail.com",
        userid: null,
        password: "password2"
    }),
    new seedModel({
        username: null,
        email: "user3@gmail.com",
        userid: null,
        password: "password3"
    })
];

SeedArr.forEach(function(item){
    item.password = item.generateHash(item.password)
    console.log("item.password",item.password);
});


var done = 0;
for (var i = 0; i < SeedArr.length; i++) {
    SeedArr[i].save(function(err, result) {
        console.log('addded');
        done++;
        if (done === SeedArr.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}

app.listen(8080,function(){
    console.log("app started on 8000");
});