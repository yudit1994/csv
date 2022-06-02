const express = require('express');
const app = express();
const port = process.env.PORT || 8000  ;

//middleware of body parser
app.use(express.urlencoded());


//setting ejs as view engine
app.set('view engine','ejs');


//setting up static file , images , js , css , uploads
app.use(express.static('./assests'));
app.use('/upload',express.static(__dirname+'/uploads'));


//setting up routes
app.use('/',require('./routes/index'));

//setting up mongoose
const mongoose = require('./config/mongoose');

//setting up server
app.listen(port,function(err){
    if(err){
    console.log(err);
    return;
    }
    console.log('server running');
});