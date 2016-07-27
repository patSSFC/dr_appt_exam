var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

console.log("loaded Appt schema");
var ApptSchema = new Schema({
    _username: {type: Schema.Types.ObjectId, ref: 'User'},
    time: {type: Date},
    complaint: {type: String, required: true},
    date: {type: Date, required: true}
});

var Appt = mongoose.model('Appt', ApptSchema);
