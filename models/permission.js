const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PermissionSchema = new Schema({
    description: String
});

module.exports = mongoose.model('Permission', PermissionSchema);
