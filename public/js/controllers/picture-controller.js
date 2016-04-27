angular.module('angpic').controller('PictureController',function($scope,$http){
    
    $scope.picture = {};
        
   $scope.send = function (){      
       console.log($scope.picture);
   };
       
});