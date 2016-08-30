const PermissionSchema = require('../models/permission');
const PermissionRepository = function() {

    var save = function(permission, next) {
        permission.save(next);
    }

    var remove = function(id, next) {

        PermissionSchema.remove({
            _id: {
                $in: id
            }
        }, next);
    }

    var findOne = function(id, next) {
        PermissionSchema.findOne({
            _id: id
        }, next);
    }

    var findAll = function(next) {
        PermissionSchema.find({}, next);
    }

    var update = function(id, descript, next) {

        PermissionSchema.findOneAndUpdate({
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

module.exports = PermissionRepository;