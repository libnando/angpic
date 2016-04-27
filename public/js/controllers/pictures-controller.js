angular.module('angpic').controller('PicturesController',function($scope,$http){
    $scope.pictures = [];
    $scope.filter = '';
    
    $http.get('v1/fotos').success(function (pictures) {
        $scope.pictures = pictures;       
    }).error(function(error){
       console.log(error); 
    });
       
});