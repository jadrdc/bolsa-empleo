const router = require('express').Router();
const CategoryController = require('../controller/categorycontroller');
const JobsController = require('../controller/jobcontroller');
const multer = require('multer');
const multerOptions = multer({
    dest: 'static/uploads/'
});
const Job = require('../models/job');

router.get('/addJob', function(req, resp) {
    var categoryController = new CategoryController();
    categoryController.findAllCategory(function(err, categories) {
        resp.render('jobs/addjobs', {
            category: categories
        });
    });

});


router.post('/addJob', multerOptions.single('logo'), function(req, resp) {

const controller = new JobsController();
const job = new Job();
job.company = req.body.company;
job.jobtime = req.body.jobtime;
job.url = req.body.url;
job.position = req.body.position;
job.location = req.body.location;
job.category = req.body.category;
job.description = req.body.description;
job.email = req.body.email;
job.publicvacancy = req.body.optradio;
job.publisheddate=new Date();



controller.createJob(job, function(err, job) {
    resp.redirect('/addJob');
});
});


module.exports = router;
