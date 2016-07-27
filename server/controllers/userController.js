var mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = {
    login : function(req, res) {
        console.log(req.body);
        var user = new User({
            username : req.body.username
        });
        console.log(user);
        user.save(function(err) {
            if(err) {
                res.status(500).json(err);
            } else {
                res.status(200).json({data : "User added to the database!"});
            }
        })
    },
    getAllUsers : function(req ,res) {
        User.find({}, function(err, users) {
            if(err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(users);
            }
        });
    }
}
