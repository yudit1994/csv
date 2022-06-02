const mongoose = require('mongoose');
const db= mongoose.connection;


mongoose.connect(process.env.db_url);


module.exports=db;