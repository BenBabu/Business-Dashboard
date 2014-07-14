.state('home.cancelled_orders',{
    url:'/cancelled_orders',
    views:{
        'body':{templateUrl:'views/cancelledorders/cancelledorders.html',controller:function($scope,$http){
            $http.get('json/sales.json').success(function(data){
                $scope.cancelled_orders=data;
                console.log(data);
            })
        }}
    }
})

    .state('home.cancelled_orders.view_cancelled_order',{
        url:'/:id',
        views:{
            'test':{templateUrl:'views/cancelledorders/view_cancelledorders.html',controller:function($scope,$stateParams){
                $model=findbyId($scope.cancelled_orderss,$stateParams.id);
                $scope.cancelled_order=$model;
                $('#myModal').modal({
                    show:true,
                    backdrop:false
                })

            }}
        }
    })