const router = require('express').Router();
const JobsController = require('../controller/jobcontroller');



router.get('/jobs',function(req,resp)
{

 resp.render('public/mainpage');

});











module.exports=router;
