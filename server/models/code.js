var mongoose = require('mongoose');

module.exports = mongoose.model('Code', {
	author: {type: String, require: true, unique: true}, 
	code: String
});