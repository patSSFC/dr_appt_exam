var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

console.log("loaded User schema");
var UserSchema = new Schema({
    username: {type: String, required: true}
});

var User = mongoose.model('User', UserSchema);
