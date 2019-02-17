var myAppModule = angular.module('BlogApp', ['ui.tinymce','ui.router']);

myAppModule.controller('TextController', function($scope) {
  $scope.tinymceModel = 'hI new instance';

  $scope.getContent = function() {
    console.log('Editor content:', $scope.tinymceModel);
  };

  $scope.setContent = function() {
    $scope.tinymceModel = "model";
  };

  $scope.tinymceOptions = {
    plugins: 'link image code',
    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
  };
});