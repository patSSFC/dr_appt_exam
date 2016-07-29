drApp.controller('ApptController', function($scope, $location, apptFactory) {
    $scope.formData;
    $scope.error;
    $scope.appointments;
    $scope.user;
    $scope.users;

    $scope.onNewAppt = function() {
        console.log($scope.formData);
        apptFactory.postNewAppt($scope.formData, function(data) {
            $location.path('/view');
        });
    }
    
    apptFactory.getAllAppt(function(data) {
        $scope.appointments = data.data;
        console.log($scope.appointments);
    });
});
