'use strict';
module.exports = sequelize=>{
	let Sequelize = require('sequelize');
let Partners = sequelize.define('tbl_partners', {

	partner_id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	alias: {
		type: Sequelize.STRING,
	},
	review_company_id: {
		type: Sequelize.INTEGER,
	},
	title: {
		type: Sequelize.STRING,
	},
	title_phrase: {
		type: Sequelize.STRING,
	},
	icon: {
		type: Sequelize.STRING,
	},
	status: {
		type: Sequelize.BOOLEAN,
	},
	description_flex1: {
		type: Sequelize.BLOB,
	},
	description_flex2: {
		type: Sequelize.BLOB,
	},
	description_flex3: {
		type: Sequelize.BLOB,
	},
	is_published: {
		type: Sequelize.BOOLEAN,
	},
	created_at: {
		type: Sequelize.INTEGER,
	}
}, {

	timestamps: true,

	createdAt: false,

	updatedAt: 'updated_at',

	freezeTableName: true // Model tableName will be the same as the model name
});

	return Partners;
}