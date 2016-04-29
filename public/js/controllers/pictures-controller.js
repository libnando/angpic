angular.module('angpic').controller('PicturesController',function($scope,$http){
    $scope.pictures = [];
    $scope.filter = '';
    $scope.message = '';
    
    $http.get('v1/fotos').success(function (pictures) {
        $scope.pictures = pictures;       
    }).error(function(error){
       $scope.message = error; 
    });
    
    $scope.remove = function (picture) {
        $http.delete('v1/fotos/'+picture._id)
        .success(function () {
            
            var indexPicure = $scope.pictures.indexOf(picture);
            $scope.pictures.splice(indexPicure, 1);
            $scope.message = 'Foto '+picture.titulo+' foi removida com sucesso.';
                   
        }).error(function(error){
            $scope.message = error; 
        });
    }
       
});