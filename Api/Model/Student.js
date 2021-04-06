const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
	_id 		                : mongoose.Schema.Types.ObjectId,
	Name 		                : String,
	mail 		                : String,
	message 		            : String,
	mobileno                    : Number,
	createdAt 	                : Date,
	createdBy 	                : String
});

module.exports = mongoose.model('student', StudentSchema);