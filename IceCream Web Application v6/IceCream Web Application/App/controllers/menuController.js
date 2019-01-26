

app.controller('menuController', function (shopService) {

    var vm = this;
    var promiseGet = shopService.getItems(); 

    promiseGet.then(function (p1) {

        vm.Items = p1.data.items;
    },
        function (errorP1) {
            alert('FAILURE LOADING Employees', errorP1)
        });

})