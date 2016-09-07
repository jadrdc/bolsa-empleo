const router = require('express').Router();
const CategoryController = require('../controller/categorycontroller');
const multer= require('multer');
const multerOptions= multer({ dest: 'static/uploads/' })

router.get('/addJob', function(req, resp) {

      var categoryController = new CategoryController();
      categoryController.findAllCategory(function(err, categories) {
          resp.render('jobs/addjobs', {
              category: categories
          });
      });

});


router.post('/addJob',multerOptions ,function(req, resp) {


});



module.exports = router;
