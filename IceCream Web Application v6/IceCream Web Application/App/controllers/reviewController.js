

app.controller('reviewController', function (shopService) {

    var vm = this;
    var promiseGet = shopService.getItems(); 
    promiseGet.then(function (p1) {

        vm.myReviews = p1.data.reviews;

      
    },
        function (errorP1) {
            alert('FAILURE LOADING Employees', errorP1)
        });


    vm.SubmitReview = function () {

        var review = {

            Name: vm.Name,
            Email: vm.REmail,
            Review: vm.taReview,
            Rate: vm.Rate
        }
        //alert(JSON.stringify(review) + ' Controller')
        var GetResult= shopService.SubmitTheReview(review);     
        GetResult.then(function (p1) {

            vm.success = p1.data;
            //alert(JSON.stringify(vm.success))
            if (vm.success.s == 1) {
                alert('Thanks for Submitting your Review ' + review.Name + ' :)');
                //vm.resetForm();
            }
            else {
                alert("Error has occured while submiting review! :( " + JSON.stringify(data));
            }

        },
            function (errorP1) {
                alert('FAILURE LOADING Employees', errorP1)
            });

    }


})


    