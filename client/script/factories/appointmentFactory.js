drApp.factory('apptFactory', function($http, $routeParams) {
    var factory = {};

    factory.user;

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

    return factory;
})
