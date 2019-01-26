

app.service('shopService', function ($http,$q) {

    this.SubmitEmailSubscribe = function (email) {

       // alert(email);
        return $http({

            method: "POST",
            url: "/GetData.aspx?q=1&e=" + email ,
            headers: { 'Content-Type': 'application/json' },

        }).success(function (data) {

            //alert('success'+ JSON.stringify(data));

        }).error(function (data) {

            alert('Failed' + JSON.stringify(data));


        })

    }


    this.getItems = function () {


        return $http({
            method: "GET",
            url: "/Json/Items.json",
            //headers: { 'Content-Type': 'application/json' },
        }).success(function (data) {
            // alert('success' + JSON.stringify(data))
        }).error(function (data) {

            alert(data);
        });
    };

    this.SubmitTheReview = function (review) {
        // alert(JSON.stringify(review));
        var MyRev = JSON.stringify(review);
       var Success= $http({
            method: "POST",
            url: "/GetData.aspx?q=2&review=" + MyRev,
            dataType: "json",
            header: { "Content-Type": "application/json; charset=utf-8" }
        })
        return Success;
        //.success(function (data) {
        //    // alert(JSON.stringify(data))
        //}).error(function (data) {

        //    alert(JSON.stringify(data));
        //});

    }


 
})