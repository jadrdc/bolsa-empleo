const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    lastname: String,
    password: String,
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    categoryList: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }],
    permissionList: [{
        type: Schema.Types.ObjectId,
        ref: 'Permission'
    }]

});

module.exports = mongoose.model('User', UserSchema);
