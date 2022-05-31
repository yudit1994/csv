const mongoose = require('mongoose');

const uploadschema = mongoose.Schema({
    filename:{
        type:String,
        require:true
    },
    filepath:{
        type:String,
        require:true
    }
});

const upload = mongoose.model('upload',uploadschema);
module.exports = upload;