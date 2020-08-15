require('./models/db');
const express=require('express');
const path=require('path');
const exphbs=require('express-handlebars');
const Handlebars = require('handlebars');
const employeeController=require('./controllers/employeeController');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const bodyparser = require('body-parser');
const { urlencoded } = require('express');
var app=express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs',exphbs({
    extname:'hbs',
    defaultLayout:'mainLayout',
    layoutsDir:__dirname + '/views/layouts/',
    hbs: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine','hbs');
app.listen(4000,()=>{
    console.log('Running at port:4000');
});
app.use('/employee',employeeController);