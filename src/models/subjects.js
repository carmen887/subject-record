const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subSchema = new Schema({
    subject: String,
    qualification: Int32Array,
});

module.exports = mongoose.model('subject', subSchema);