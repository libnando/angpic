angular.module('angpic').controller('PictureController', function ($scope, $http, $routeParams) {

    $scope.picture = {};
    $scope.message = '';

    if ($routeParams.pictureId) {
        $http.get('/v1/fotos/' + $routeParams.pictureId)
            .success(function (picture) {
                $scope.picture = picture;
            })
            .error(function (error) {
                console.log(error);
                $scope.message = 'Não foi possível obter a foto'
            });
    }

    $scope.send = function () {

        if ($scope.formulary.$valid) {

            if ($routeParams.pictureId) {

                $http.put('/v1/fotos/' + $scope.picture._id, $scope.picture)
                    .success(function () {
                        $scope.message = 'Foto alterada com sucesso';

                    })
                    .error(function (error) {
                        console.log(error);
                        $scope.message = 'Não foi possível alterar';
                    });

            } else {
                $http.post('/v1/fotos', $scope.picture)
                    .success(function () {
                        $scope.picture = {};
                        $scope.message = 'Foto cadastrada com sucesso';
                    })
                    .error(function (error) {
                        console.log(error);
                        $scope.message = 'Não foi possível cadastrar a foto';
                    })
            }
        }
    };



});