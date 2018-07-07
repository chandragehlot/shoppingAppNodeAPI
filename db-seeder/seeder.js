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
        productname: 'LAPTOP HP0021',
        category: 'laptop',
        subcategory:'gaminglaptop',
        price: 30000,
        rating: 4,
        trendcategory : 'new',
        warrantyduration: 2,
        imagespath:'http://localhost:9000/images/laptop01.png'
    }),
    new seedModel({
        productname: 'LAPTOP HP001',
        category: 'laptop',
        subcategory:'gaminglaptop',
        price: 35000,
        rating: 2,
        trendcategory : 'new',
        warrantyduration: 2 ,
        imagespath:'http://localhost:9000/images/laptop02.png'
    }),    
    new seedModel({
        productname: 'LAPTOP Lenovo 100',
        category: 'laptop',
        subcategory:'notebook',
        price: 40000,
        rating: 3,
        trendcategory : 'topselling',
        warrantyduration: 2,
        imagespath:'http://localhost:9000/images/laptop03.png'
    }),
    new seedModel({
        productname: 'LAPTOP Lenovo 234',
        category: 'laptop',
        subcategory:'notebook',
        price: 20000,
        rating: 5,
        trendcategory : 'topselling',
        warrantyduration: 2 ,
        imagespath:'http://localhost:9000/images/laptop04.png'
    }),    
    new seedModel({
        productname: 'Camera Canon001',
        category: 'camera',
        subcategory:'digitalcamera',
        price: 11000,
        rating: 2,
        trendcategory : 'new',
        warrantyduration: 1,
        imagespath:'http://localhost:9000/images/camera01.png'
    }),
    new seedModel({
        productname: 'Camera Canon1',
        category: 'camera',
        subcategory:'DSLR',
        price: 19000,
        rating: 3,
        trendcategory : 'new',
        warrantyduration: 2,
        imagespath:'http://localhost:9000/images/camera02.png'
    }),    
    new seedModel({
        productname: 'Camera Nikon 92',
        category: 'camera',
        subcategory:'digitalcamera',
        price: 15000,
        rating: 3,
        trendcategory : 'topselling',
        warrantyduration: 2,
        imagespath:'http://localhost:9000/images/camera03.png'
    }),
    new seedModel({
        productname: 'Camera Nikon 100',
        category: 'camera',
        subcategory:'DSLR',
        price: 20000,
        rating: 2,
        trendcategory : 'topselling',
        warrantyduration: 1 ,
        imagespath:'http://localhost:9000/images/camera04.png'
    }),
    new seedModel({
        productname: 'Sony Headphone AR-001',
        category: 'accesories',
        subcategory:'headphone',
        price: 2000,
        rating: 4,
        trendcategory : 'topselling',
        warrantyduration: 2 ,
        imagespath:'http://localhost:9000/images/headphone01.png'
    }),
    new seedModel({
        productname: 'Sony Headphone AP-001',
        category: 'accesories',
        subcategory:'headphone',
        price: 2000,
        rating: 4,
        trendcategory : 'topselling',
        warrantyduration: 2,
        imagespath:'http://localhost:9000/images/headphone02.png'
    }),
    new seedModel({
        productname: 'BOSS Headphone LP-001',
        category: 'accesories',
        subcategory:'headphone',
        price: 2000,
        rating: 4,
        trendcategory : 'topselling',
        warrantyduration: 2,
        imagespath:'http://localhost:9000/images/headphone02.png'
    }),
    new seedModel({
        productname: 'Phillips Earphone AR-001',
        category: 'accesories',
        subcategory:'earphone',
        price: 2400,
        rating: 4,
        trendcategory : 'new',
        warrantyduration: 2 ,
        imagespath:'http://localhost:9000/images/earphone01.png'
    }),
    new seedModel({
        productname: 'Sony Earphone E-001',
        category: 'accesories',
        subcategory:'earphone',
        price: 2000,
        rating: 5,
        trendcategory : 'new',
        warrantyduration: 5 ,
        imagespath:'http://localhost:9000/images/earphone02.png'
    })
];

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