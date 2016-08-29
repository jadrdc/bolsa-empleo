const CategoryRepository = require('../repository/categoryrepository');
const Category = require('../models/category');


const CategoryController = function() {

    this.createCategory = function(categorydescription, next) {
        var category = new Category();
        category.description = categorydescription;
        var categoryrepo = new CategoryRepository();
        categoryrepo.save(category, next);
    }


    this.findAllCategory = function(next) {
        var categoryrepo = new CategoryRepository();
        categoryrepo.findAll(next);
    }

    this.updateCategory = function(req, next) {
        var categoryrepo = new CategoryRepository();
        categoryrepo.update(req.body._id, req.body.category, next);
    }



};



module.exports = CategoryController;
