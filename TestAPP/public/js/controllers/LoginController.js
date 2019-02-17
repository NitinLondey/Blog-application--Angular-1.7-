var BlogApp = angular.module('BlogApp', ['socialLogin']);

BlogApp.module.controller('LoginController','$window','$scope',function($scope) {
        $scope.emailId = $window.emailId;
        this.user = {
            emailId:$window.emailId
        
        };
 
        this.submit = function() {
           console.log('User clicked register', this.user);
           window.location.href()
        };



    });
