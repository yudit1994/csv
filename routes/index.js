const express = require('express');
const router = express.Router();
const homecontroller = require('../controller/homecontroller');
const multer  = require('multer');
const path = require('path');

const upload = require('../config/multer');

//home page
router.get('/', homecontroller.home);

//after clicking the link on home page opens the csv
router.get('/open', homecontroller.open);

//uploads the file in upload folder and db
router.post('/upload',upload.single('uploaded_file'),homecontroller.upload);

//it shows the filtered element
router.post('/row',homecontroller.row);

module.exports = router;