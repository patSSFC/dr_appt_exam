drApp.factory('apptFactory', function($http, $routeParams) {
    var factory = {};

    factory.user;

    factory.postNewAppt = function(data, callback) {
        $http.post('/new', data)
            .then(function successCallback(returnData) {
                callback(returnData);
            }, function errorCallback(err) {
                console.log("error in post!");
                console.log(err.data);
            });

    }

    factory.deleteAppt = function(data, callback) {
        console.log(data);
        $http.post('/view', data)
            .then(function successCallback(returnData) {
                callback(returnData);
            }, function errorCallback(err) {
                console.log("error in delete!");
                callback(err)
            });
    };

    factory.getAllAppt = function(callback) {
        $http.get('/view')
            .then(function successCallback(returnData) {
                callback(returnData);
            }, function errorCallback(err) {
                console.log("error in getAll!");
                console.log(err.data);
            });
    }

    return factory;
})
