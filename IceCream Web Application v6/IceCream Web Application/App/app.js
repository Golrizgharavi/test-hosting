
var app = angular.module('myApp', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {


        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'homeController'

            })

            .when('/menu', {

                templateUrl: 'views/menu.html',
                controller: 'menuController'
            })

            .when('/about', {

                templateUrl: 'views/about.html',
                controller: 'aboutController'
            })
            .when('/review', {

                templateUrl: 'views/review.html',
                controller: 'reviewController'
            })

    }])


.controller('mainController', function ($scope) {


    })



    .controller('subscribeForm', ['$scope', 'shopService', function ($scope, shopService) {
 
    $scope.Subscribe = function () {
       // alert($scope.email)
        var SubscribeMsg = document.getElementById('SubscribeMsg');
            if ($scope.email) {

                var submitEmail = shopService.SubmitEmailSubscribe($scope.email);
                submitEmail.then(function (p1) {
        
                    //alert(JSON.stringify(p1.data))
                    if (p1.data.s == 1)                  
                        SubscribeMsg.innerHTML = 'Thanks for Subscription!! :)';                    
                    else 
                        alert("Error has occured while subscribing.. :(" + JSON.stringify(data));
                    
                },

                    function (errorP1) { alert('Failure Loading!' + errorP1) });
                $scope.email = '';
                
            }
        };
    }]);
