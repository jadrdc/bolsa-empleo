const PermissionRepository = require('../repository/permissionrepository');
const Permission = require('../models/permission');


const PermissionController = function() {

    this.createPermission = function(permissiondescription, next) {
        var permission = new Permission();
        permission.description = permissiondescription;
        var permissionrepo = new PermissionRepository();
        permissionrepo.save(permission, next);
    }


    this.findAllPermission = function(next) {
        var permissionrepo = new PermissionRepository();
        permissionrepo.findAll(next);
    }

    this.updatePermission = function(req, next) {
        var permissionrepo = new PermissionRepository();
        permissionrepo.update(req.body._id, req.body.permission, next);
    }


    this.removePermission = function(req, next) {
        var permissionrepo = new PermissionRepository();
        permissionrepo.remove(req.body.permissionid, next);
    }


};



module.exports = PermissionController;
