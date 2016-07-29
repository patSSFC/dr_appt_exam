console.log("loaded routes");
var appointment = require('../controllers/appointmentController');
var user = require('../controllers/userController')
module.exports = function(app) {
    app.post('/new', function(req, res) {
        console.log("inside POST /new route");
        appointment.postNewAppt(req, res);
    });
    app.get('/view', function(req, res) {
        console.log("inside GET /list route");
        appointment.getAllAppt(req, res);
    });
    app.post('/login', function(req, res) {
        console.log("inside POST /login route");
        user.login(req, res);
    });
    app.post('/view', function(req, res) {
        console.log("inside DELETE /view route");
        appointment.deleteAppt(req, res);
    });
};
