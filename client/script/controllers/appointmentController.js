drApp.controller('ApptController', function($scope, $location, apptFactory) {
    $scope.formData;
    $scope.success;
    $scope.error;
    $scope.appointments;
    $scope.user;
    $scope.users;
    $scope.currentDate = new Date();
    console.log($scope.currentDate);

    $scope.onNewAppt = function() {
        console.log($scope.formData);
        apptFactory.postNewAppt($scope.formData, function(data) {
            $scope.success = data.data;
            $location.path('/view');
        });
    }

    $scope.onLogin = function() {
        var userFound = false;
        $scope.user = $scope.formData.username;
        console.log($scope.user);
        for(var i = 0; i < $scope.users.length; i++) {
            console.log($scope.users[i].username);
            if($scope.users[i].username === $scope.user) {
                console.log("Found!");
                userFound = true;
            }
        }
        console.log(userFound);
        if(userFound === false) {
            apptFactory.login({username: $scope.user}, function(data) {
                console.log(data);
            })
            $location.path('/view');
        } else {
            $location.path('/view');
        }
    };

    apptFactory.getAllAppt(function(data) {
        $scope.appointments = data.data;
        console.log($scope.appointments);
    });

    apptFactory.getAllUsers(function(data) {
        $scope.users = data;
    })


});
