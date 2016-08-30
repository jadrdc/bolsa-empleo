const CategorySchema = require('../models/category');
const categoryRepository = function() {

    var save = function(category, next) {
        category.save(next);
    }

    var remove = function(id, next) {

       CategorySchema.remove({
            _id: {$in : id }
        }, next);
    }

    var findOne = function(id, next) {
        CategorySchema.findOne({
            _id: id
        }, next);
    }

    var findAll = function(next) {
        CategorySchema.find({}, next);
    }

    var update = function(id, descript, next) {

        CategorySchema.findOneAndUpdate({
            _id: id
        }, {
            description: descript
        }, {
            upsert: false
        }, next);
    }


    return {
        save: save,
        remove: remove,
        findOne: findOne,
        findAll: findAll,
        update: update
    }

};

module.exports = categoryRepository;
