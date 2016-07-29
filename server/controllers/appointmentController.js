var mongoose = require('mongoose');
var Appt = mongoose.model('Appt');
var User = mongoose.model('User');
console.log("loaded apptController");

module.exports = {
    postNewAppt : function(req, res) {
        console.log("posting new appointment");
        console.log(req.body);
        var appt = new Appt({
            time: req.body.time,
            date: req.body.date,
            complaint: req.body.complaint,
        });
        User.findOne({_id : req.body.userID}, function(err, user) {
            if(err) {
                res.status(500).json({data: "Error finding user in db"});
            } else {
                appt._username = user._id;
                appt.save(function(err) {
                    if(err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json({data : "Appointment added to the database!"})
                    }
                });
            }
        });
    },
    getAllAppt : function(req, res) {
        Appt.find({})
        .populate("_username")
        .exec(function(err, appointments) {
            if(err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(appointments);
            }
        })
    },
    deleteAppt : function(req, res) {
        console.log("in it");
        console.log(req.body);
        Appt.findOneAndRemove({_id : req.body.a_id}, function(err, appointment) {
            if(err) {
                res.status(500).json(err);
            } else {
                res.status(200).json({data: "appointment was deleted!"});
            }
        })
    }
}
