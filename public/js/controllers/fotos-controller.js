angular.module('angpic').controller('FotosController',function($scope,$http){
    $scope.fotos = [];
    
    
    $http.get('v1/fotos').success(function (fotos) {
        $scope.fotos = fotos;       
    }).error(function(error){
       console.log(error); 
    });
    
    /*promise.then(function (returno) {
        $scope.fotos = returno.data;       
    }).catch(function(error){
       console.log(error); 
    });*/
    
});