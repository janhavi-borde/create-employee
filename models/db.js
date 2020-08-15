const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/EmployeeDB',{useNewUrlParser:true, useUnifiedTopology: true},(err)=>{
    if(!err){
        console.log('MongoDb connection succeed')
    }
    else{
        console.log('error:'+err)
    }
});
require('./employee.model');