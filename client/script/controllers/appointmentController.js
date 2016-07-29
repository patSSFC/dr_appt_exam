drApp.controller('ApptController', function($scope, $location, apptFactory, userFactory) {

    $scope.onNewAppt = function() {
        console.log($scope.formData);
        $scope.formData.userID = userFactory.user.id;
        apptFactory.postNewAppt($scope.formData, function(data) {
            $location.path('/view');
        });
    }

    $scope.onDelete = function(appt_id) {
        apptFactory.deleteAppt({a_id : appt_id}, function(data) {
            console.log("did it!");
            apptFactory.getAllAppt(function(data) {
                $scope.appointments = data.data;
                console.log($scope.appointments);
                $scope.user = userFactory.user;
            });
        });
    }

    apptFactory.getAllAppt(function(data) {
        $scope.appointments = data.data;
        console.log($scope.appointments);
        $scope.user = userFactory.user;
    });
});
