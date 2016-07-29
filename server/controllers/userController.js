var mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = {
    login : function(req, res) {
        // console.log(req);
        User.findOne({username: req.body.username}, function(err, user) {
            if(err) {
                res.status(500).json(err);
            } else {
                if(user){
                    res.status(200).json({user : user, message: "You already have a user account!"});
                }else{
                    var user = new User({
                        username : req.body.username
                    });
                    user.save(function(err) {
                        if(err) {
                            res.status(500).json(err);
                        } else {
                            res.status(200).json({user : user, message: "Your account was created!"});
                        }
                    })
                }
            }
        });
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
