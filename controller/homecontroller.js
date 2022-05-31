const fileupload = require('../model/file');
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
var pagination = require('pagination');

//home page
module.exports.home = function(req,res){
    
    fileupload.find({},function(err,file){
        res.render('home',{
          files: file
        });
    })
}

//file uploading
module.exports.upload = function(req,res){
    var path = 'http://localhost:8000/upload/'+req.file.filename;
    fileupload.create({
        filename: req.file.filename,
        filepath: path

    },function(err,upload){
        if(err){
            console.log('error in creating',err);
            return;
        }

    })
    res.redirect('back');
    
}

//opens the file which we click on
module.exports.open = function(req,res){
  const results = [];
  const filepath = path.join(__dirname,'../uploads/'+req.query.name);
  var start1 = (req.query.page - 1) * 100;
  var end1 = req.query.page * 100;

  fs.createReadStream(filepath)
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    res.render('details',{
        filedetails: results,
        filename: req.query.name,
        a:0,
        start:start1,
        end:end1

    })
    
  });
}

//shows the filtered element
module.exports.row = function(req,res){

  const results = [];
  const filepath = path.join(__dirname,'../uploads/'+req.body.posting);

  fs.createReadStream(filepath)
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    if(req.body.row == ''){
      res.render('details',{
        filedetails: results,
        filename: req.query.name,
        a:0,
        start:0,
        end:results.length
      })
    }
    else{
    res.render('details',{
        filedetails: results,
        filename: req.query.name,
        a:1,
        search: req.body.row,
        start:0,
        end:results.length
    })
    }
    
  });
    
}