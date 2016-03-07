'use strict';

module.exports = db=> {
	//let config = require('config');
	let path = require('path');
	let Partners = require('express').Router();
	let Model = require(path.join(__dirname, '../models/Partners'))(db);

	Partners.get('/', function(req, res, next) {

		let result = [];

		Model.findAll({
			attributes: ['partner_id', 'title']/*,
			where: {
				alias: 'kaplan-courses'
			}*/
		}).then(function (partners) {
			partners.forEach(function(item, i, arr) {
				result.push(item.dataValues);
			});
			//console.log(result);
			res.json({
				partners: result
			});
		}).catch(function(err) {
			console.log(err);
		});
	});

	Partners.get('/:id', function(req, res, next) {
		Model.findOne({
			where: {partner_id: req.params.id}
		}).then(function (partners) {
			let result = partners.dataValues;
			res.json({
				partners: result
			});
		}).catch(function(err) {
			console.log(err);
		});
	});

	Partners.post('/', function(req, res, next) {
		data.partners.push(req.body);
		res.json(req.body);
	});

	Partners.put('/:id', function(req, res, next) {

		let partner = {};
		Object.assign(partner, req.body);
		console.log(partner.created_at);
		//some checks
		Model.update(
			partner,
		{
			where: {
				partner_id: partner.partner_id
			}
		}
		).then(function (partners) {
			res.json({message:'OK'});
		}).catch(function(err) {
			console.log(err);
			res.status(500).send(err);

		});

	});

	Partners.delete('/:id', function(req, res, next) {
		let id = req.params.id;

		if (id >= 0 && id < data.partners.length) {
			data.partners.splice(id, 1);
			res.json(true);
		} else {
			res.json(false);
		}
	});

	return Partners;
}