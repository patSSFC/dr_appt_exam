drApp.controller('UserController', function($scope, $location, userFactory) {

    $scope.onLogin = function() {
        userFactory.login({username: $scope.formData.username}, function(data) {
            $scope.user = userFactory.user;
            console.log($scope.user);
            console.log(data);
            $location.path('/view');
        })
    };
});
