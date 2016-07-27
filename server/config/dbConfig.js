var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');
console.log('Loaded DB connection');

var models_dir = path.join(__dirname, '../models');

mongoose.connect("mongodb://localhost/drAppt");

fs.readdirSync(models_dir).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
         // require the file (this runs the model file which registers the schema)
        require(models_dir + '/' + file);
    }
});
