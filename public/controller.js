angular
.module('app',[])
.controller('AppCtrl',($scope, $http)=>{

    $scope.result = 'Iniciando...';
    $scope.env = 'Iniciando...';


    setInterval(()=>{
        $http({
            method: 'GET',
            url: '/service'
        }).then((data) => {
            $scope.result = data.data.response;
            $scope.env = data.data.env;
        });

    },1000);

})
