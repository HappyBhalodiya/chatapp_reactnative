const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({

	email: String,
	password:String,
	username:String,
	profileimage:{ type: String, default: '' },
	path:{type: String, default:''},
	
});

module.exports = mongoose.model('User', userSchema);