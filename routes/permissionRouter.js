const router = require('express').Router();
const PermissionController = require('../controller/permissioncontroller');

router.get('/addPermission', function(req, resp) {
    resp.render('permission/addPermission');
});

router.post('/addPermission', function(req, resp) {
    var permissionController = new PermissionController();
    permissionController.createPermission(req.body.permission, function(err, permission) {
        resp.redirect('/permission');
    });
});



router.post('/updatePermission', function(req, resp) {
    var permissionController = new PermissionController();
    permissionController.updatePermission(req, function(err, permission) {
        resp.redirect('/permission');
    });

});

router.post('/deletePermission', function(req, resp) {
    var permissionController = new PermissionController();
    permissionController.removePermission(req, function(err, permission) {
      resp.redirect('/permission');
    });

});

router.get('/permission', function(req, resp) {
    var permissionController = new PermissionController();
    permissionController.findAllPermission(function(err, permission) {
        resp.render('permission/detailspermission', {
            permission: permission
        });
    });

});





module.exports = router;
