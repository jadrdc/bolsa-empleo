const router = require('express').Router();
const CategoryController = require('../controller/categorycontroller');

router.get('/addCategory', function(req, resp) {
    resp.render('category/addCategory');
});

router.post('/addCategory', function(req, resp) {
    var categoryController = new CategoryController();
    categoryController.createCategory(req.body.category, function(err, category) {
        resp.redirect('/addCategory');
    });
});



router.post('/updateCategory', function(req, resp) {
    var categoryController = new CategoryController();

    categoryController.updateCategory(req, function(err, category) {
        resp.redirect('/categories');
    });

});

router.post('/deleteCategory', function(req, resp) {
    var categoryController = new CategoryController();

    categoryController.removeCategory(req, function(err, category) {
        resp.redirect('/categories');
    });

}); 



router.get('/categories', function(req, resp) {

    var categoryController = new CategoryController();
    categoryController.findAllCategory(function(err, categories) {
        resp.render('category/detailscategory', {
            category: categories
        });
    });

});





module.exports = router;
