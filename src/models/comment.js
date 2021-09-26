const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Comment = new Schema({
     text: {type: String, required: true },
     user: {type: Schema.Types.ObjectId, required: true, ref: 'User'},
},{
     timestamps: true,
});

module.exports = mongoose.model('Comment', Comment);