'use strict';

let nconf = require('nconf');
let path = require('path');

const DEFAULT_DB = "gmatclub.com";

nconf.argv().env();

nconf.add('main', {type: 'file', file: path.join(__dirname, '/json/main.json')});
nconf.add('db', {type: 'file', file: path.join(__dirname, '/json/db.json')});

nconf.defaults({
	'http': {
		'port': 3000
	}
});

const DB_CONFIG = nconf.get("MainDbConfig:local.beta.gmatclub.com");
/*
 getConfig: hostname => {
 let item = nconf.get(hostname);
 if (hostname === undefined || !item) {
 item = nconf.get(DEFAULT_DB);
 }
 return item;
 },
*/

let config = {
	db: module => {
		let dbname = nconf.get(`modules:${module}:database`);
		if (!dbname) {
			return false;
		}
		let connectionParams = {
			database: DB_CONFIG.db[dbname],
			username: DB_CONFIG.user,
			password: DB_CONFIG.pass,
			host: DB_CONFIG.host
		};
		return require('config/db')(module,connectionParams);
	},
	port : nconf.get('http:port'),
	DOCUMENT_ROOT: path.resolve(`../${__dirname}`),
	MODULE_PATH: `${this.DOCUMENT_ROOT}/modules`
};

module.exports = config;