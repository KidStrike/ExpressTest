'use strict';

let fs = require('fs');
let debug = require('debug')('app:middleware:registerConnection');
let Sequelize = require('sequelize');

let models = [];
let conns = [];

function factory(module, connectionParams) {
	if(!module) {
		return false;
	}

	let modulePath = `${__dirname}/../modules/${module}`;

	// if the connection is cached on the array, reuse it
	if (conns[module]) {
		debug('reusing connection', module, '...');
	} else {
		if(!fs.statSync(modulePath).isDirectory()) {
			debug('incorrect module: ', module, '...');
			return false;
		}

		debug('creating new connection for', module, '...');
		conns[module] = new Sequelize(`${connectionParams.database}`, `${connectionParams.username}`, `${connectionParams.password}`, {
			host: connectionParams.host,
			dialect: 'mysql'
		});
	}

	return conns[module];

	/*if(models[module]) {
		debug('reusing models');
	} else {
		let instanceModels = [];
		let schemas = fs.readdirSync(path);
		debug('registering models');
		schemas.forEach(function(schema) {
			let model = schema.split('.').shift();
			instanceModels[model] = conns[module].model(model, require([path, schema].join('/')));
		});
		models[module] = instanceModels;
	}
	return models[module];*/
}

module.exports = factory;