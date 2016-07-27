var mongoose = require('mongoose');
var Appt = mongoose.model('Appt');
console.log("loaded apptController");

module.exports = {
    postNewAppt : function(req, res) {
        console.log("posting new appointment");
        console.log(req.body);
        var appt = new Appt({
            time: req.body.time,
            date: req.body.date,
            complaint: req.body.complaint
        });
        console.log(appt);
        appt.save(function(err) {
            if(err) {
                res.status(500).json(err);
            } else {
                res.status(200).json({data : "Appointment added to the database!"})
            }
        })
    },
    getAllAppt : function(req, res) {
        console.log("getting all appointmets");
        Appt.find({}, function(err, appointmets) {
            if(err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(appointmets);
            }
        })
    }
}
