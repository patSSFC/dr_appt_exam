drApp.factory('apptFactory', function($http, $routeParams) {
    var factory = {};

    factory.postNewAppt = function(data, callback) {
        $http.post('/new', data)
            .then(function successCallback(returnData) {
                // this callback will be called asynchronously
                // when the response is available
                callback(returnData);
            }, function errorCallback(err) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log("error in post!");
                console.log(err.data);
            });

    }

    factory.getAllAppt = function(callback) {
        $http.get('/view')
            .then(function successCallback(returnData) {
                // this callback will be called asynchronously
                // when the response is available
                callback(returnData);
            }, function errorCallback(err) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log("error in getAll!");
                console.log(err.data);
            });
    }

    factory.login = function(data, callback1, callback2) {
        $http.post('/login', data)
            .then(function successCallback(returnData) {
                // this callback will be called asynchronously
                // when the response is available
                // console.log(returnData);
                callback1(returnData);
            }, function errorCallback(err) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log("error in login!");
                console.log(err);
            });
    }

    factory.getAllUsers = function(callback) {
        $http.get('/login')
            .then(function successCallback(returnData) {
                // this callback will be called asynchronously
                // when the response is available
                console.log(returnData);
                callback(returnData.data);
            }, function errorCallback(err) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log("error in login!");
                console.log(err);
            });
    }

    return factory;
})
