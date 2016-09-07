const JobSchema = require('../models/job');
const jobRepository = function() {

    var save = function(job, next) {
        job.save(next);
    }

    var remove = function(id, next) {

       JobSchema.remove({
            _id: {$in : id }
        }, next);
    }

    var findOne = function(id, next) {
        JobSchema.findOne({
            _id: id
        }, next);
    }

    var findAll = function(next) {
        JobSchema.find({}, next);
    }


    return {
        save: save,
        remove: remove,
        findOne: findOne,
        findAll: findAll,
        update: update
    }

};

module.exports = jobRepository;
