const JobRepository = require('../repository/jobrepository');
const Job = require('../models/job');


const JobsController = function() {

    this.findAllJobs = function(next) {
        var jobrepository = new JobRepository();
        jobrepository.findAll(next);
    }

    this.removeJob = function(req, next) {
        var jobrepository = new JobRepository();
        jobrepository.remove(req.body._id, next);
    }





};



module.exports = JobsController;
