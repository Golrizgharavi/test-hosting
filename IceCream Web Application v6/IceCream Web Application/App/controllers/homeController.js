
'use strict'
app.controller('homeController', function (shopService) {

    var vm = this;

    vm.message = 'Test Home Page!';
    var promiseGet = shopService.getItems(); 


    this.initCarousel = function () {

        $('#myCarousel').carousel({
            interval: 6000
        });
        $(document).ready(function () {

            $(window).resize(function () {

                var browserWidth = $(window).innerWidth();

                function resizeSlider(numColumns) {

                    //Translate number of bootstrap columns
                    if (numColumns == 4) {
                        var bsColumn = "col-xs-3";
                    } else if (numColumns == 3) {
                        var bsColumn = "col-xs-4";
                    } else if (numColumns == 2) {
                        var bsColumn = "col-xs-6";
                    } else if (numColumns == 1) {
                        var bsColumn = "col-xs-12";
                    }

                    //Upwrap the slide images from their containing divs
                    $(".slide-link").unwrap().unwrap();

                    //Wrap every card in the appropriate bootstrap column
                    $(".slide-link").wrap("<div class='" + bsColumn + " slide-wrapper'></div>");

                    var slideWrappers = $(".slide-wrapper");

                    //Wrap every 3 cards in an item class, forming 1 whole slide
                    for (var i = 0; i < slideWrappers.length; i += numColumns) {
                        if (i == 0) {
                            var activeItem = ' active';
                        } else {
                            var activeItem = '';
                        }

                        slideWrappers.slice(i, i + numColumns).wrapAll("<div class='item" + activeItem + "'></div>");
                    }

                    //Empty the control indicators and rebuild them based on new number of slides
                    $(".carousel-indicators").html("");

                    var newNumberOfSlides = $("#myCarousel .item").length;

                    for (var s = 0; s < newNumberOfSlides; s++) {
                        if (s == 0) {
                            var activeClass = "class='active'";
                        } else {
                            var activeClass = "";
                        }

                        $(".carousel-indicators").append("<li data-target='#carousel' data-slide-to='" + s + "'" + activeClass + "></li>");
                    }
                }

                //if we're on a large desktop, organize the slides in 3 columns
                if (browserWidth > 991) {
                    resizeSlider(3);
                    //Large Tablet - 3 columns
                } else if (browserWidth > 767) {
                    resizeSlider(2);
                    //Small Tablet - 2 column
                } else {
                    resizeSlider(1);
                }
            }).resize();

            $('.carousel-control.right').click(function () { $('.carousel').carousel('next') });
            $('.carousel-control.left').click(function () { $('.carousel').carousel('prev') });
        });
    },

    promiseGet.then(function (p1) {

        vm.Items = p1.data.items;
        vm.initCarousel();

    },
        function (errorP1) {
            alert('FAILURE LOADING Employees', errorP1)
        });

})


