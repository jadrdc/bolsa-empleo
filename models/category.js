const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    description: String
});

module.exports = mongoose.model('Category', CategorySchema);
