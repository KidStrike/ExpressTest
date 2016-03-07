'use strict';

let express = require('express');
let path = require('path');
let router = express.Router();
//const VIEW_PATH = path.join(__dirname, '/templates');
let db = require('config').db('marketplace');

let PartnersController = require('./controllers/PartnersController')(db);
//let ProductController = require('./controllers/ProductController')(db);

router.get('/', (req, res, next)=>{
	//res.end(`${VIEW_PATH}/index`);
	res.sendFile(path.join(__dirname,'/templates/angular/views/index.html'));
});

router.use('/partners/', PartnersController);
//router.use('/products', ProductController);

module.exports = router;