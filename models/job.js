const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const JobSchema = new Schema({
    company: String,
    jobtime: String,
    url: String,
    logo: {
        data: Buffer,
        contentType: String
    },
    position: String,
    location: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    description: String,
    email: String,
    publicvacancy: Boolean,
    publisheddate: Date,
    editurl: String,
    token: String,
   active : Boolean
});



JobSchema.pre('save', function(next) {
    var job = this;

    if (!job.isModified()) return next();
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next();
        bcrypt.hash(job._id, salt, null, function(err, hash) {
            if (err) return next(err);
            job.token = hash;
              job.editurl = '/editJob/'+job._id;
            next();
        })
    });
});






module.exports = mongoose.model('Job', JobSchema);
