const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
    company: String,
    jobtime: String,
    logo: String,
    url: String,
    position: String,
    location: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    description: String,
    email: String,
    publicvacancy: Boolean
    publisheddate: Date,
    editurl: String,
    token: String

});
module.exports = mongoose.model('Job', JobSchema);
