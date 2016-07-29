drApp.factory('userFactory', function($http, $routeParams) {
    var factory = {};

    factory.user;

    factory.login = function(data, callback1, callback2) {
        $http.post('/login', data)
            .then(function successCallback(returnData) {
                // this callback will be called asynchronously
                // when the response is available
                console.log(returnData);
                factory.user = {username : returnData.data.user.username, id : returnData.data.user._id};
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
                // console.log(returnData);
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
