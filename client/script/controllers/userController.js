drApp.controller('UserController', function($scope, $location, userFactory) {
    $scope.formData;
    $scope.user;
    $scope.users;

    $scope.onLogin = function() {
        userFactory.login({username: $scope.formData.username}, function(data) {
            $scope.user = userFactory.user;
            console.log($scope.user);
            $location.path('/view');
        })
    };

    userFactory.getAllUsers(function(data) {
        $scope.users = data;
    })

});
