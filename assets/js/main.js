

$(function () {

    "use strict";

    //===== Prealoder

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
        $(".navbar-area").addClass("sticky");
            $(".navbar .navbar-brand img").attr("src", "assets/images/logo-2.svg");
            $("#navAboutUs").parent().removeClass("active");
        //$("#homeRadialBig")
    });


    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        /*
        if (scroll < 20) {
            $(".navbar-area").removeClass("sticky");
            $(".navbar .navbar-brand img").attr("src", "assets/images/logo.svg");
        } else {
            $(".navbar-area").addClass("sticky");
            $(".navbar .navbar-brand img").attr("src", "assets/images/logo-2.svg");
        }
        */
    });



    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        /*
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
        */
    });
    var currentLocation = null;

    function contactForm() {
        $.getScript('https://smtpjs.com/v3/smtp.js',function(){
            Email.send({
                Host: "smtp.spectropharma.com",
                Username: "info@spectropharma.com",
                Password: "Ayg4hrkCte4wZqC",
                To: 'info@spectropharma.com',
                From: "uxsniper@gmail.com",
                Subject: "Temporary Message",
                Body: "Well that was easy!!",
              })
                .then(function (message) {
                  alert("Email sent successfully");
                  $("#contactForm").fadeOut("slow"); 
                  $("body")[0].style.overflow  = "auto";
                });
         });
        
    }
    $("#submitContact").on('click', function () {
        contactForm();
    });
    function removeModals(x) {
        if (x != currentLocation){
            switch (currentLocation) {
                case 1: $("#about").fadeOut("slow"); break;
                case 2: $("#focusarea").fadeOut("slow"); break;
                case 3: $("#strategy").fadeOut("slow"); break;
                case 4: $("#partnership").fadeOut("slow"); break;
                case 5: $("#careers").fadeOut("slow"); break;
            }
        }
    }
    function removeClass() {
        $("body")[0].style.overflow = "hidden";
        $("#homeWaveBig").removeClass("animate");
        $("#navAboutUs").parent().removeClass("active");
        $("#navFocusArea").parent().removeClass("active");
        $("#navStrategy").parent().removeClass("active");
        $("#navPartnership").parent().removeClass("active");
        $("#navCareer").parent().removeClass("active");
        $("#navContact").parent().removeClass("active");

        $(".navbar-area").addClass("sticky");
        $(".navbar .navbar-brand img").attr("src", "assets/images/logo-2.svg");
    }
    $("#buttonPartner").on('click', function () {
        
        $("#partnership").scrollTop(0);
        $("#partnership")[0].style.overflow = "hidden";
        $("#partnershipForm").fadeIn("slow"); 
        
    });

    $("#closePartnershipForm").on('click', function () {
        $("#partnershipForm").fadeOut("slow"); 
        $("#partnership")[0].style.overflow = "auto";
    });

    $("#buttonCareerForm").on('click', function () {
        
        $("#careers").scrollTop(0);
        $("#careers")[0].style.overflow = "hidden";
        $("#careerForm").fadeIn("slow"); 
        
    });
    $("#closeCareerForm").on('click', function () {
        $("#careerForm").fadeOut("slow"); 
        $("#careers")[0].style.overflow = "auto";
    });

    $("#navContact").on('click', function () {
        window.scrollTo(0, 0); 
        $("body")[0].style.overflow = "hidden";
        $("#contactForm").fadeIn("slow"); 
        
    });
    $("#closeContactForm").on('click', function () {
        $("#contactForm").fadeOut("slow"); 
        $("body")[0].style.overflow  = "auto";
    });
    //===== Nav Actions === 
    $("#homepage").on('click', function () {
        removeClass();
        $("body")[0].style.overflow = "auto";
        $("#homeWaveBig").addClass("animate");
        removeModals(0);
        window.scrollTo(0, 0); 
    });

    $("#navAboutUs").on('click', function () {
        removeClass();
        removeModals(1);
        currentLocation = 1;
        
        $("#about").fadeIn("slow");
        $("#about").animate({ scrollTop: 0 }, "slow");
        $("#navAboutUs").parent().addClass("active");
    });
    $("#navFocusArea").on('click', function () {
        removeClass();
        removeModals(2);
        currentLocation = 2;

        $("#focusarea").fadeIn("slow");
        $("#focusarea").animate({ scrollTop: 0 }, "slow");
        $("#navFocusArea").parent().addClass("active");
    });
    $("#navStrategy").on('click', function () {
        removeClass();
        removeModals(3);
        currentLocation = 3;

        $("#strategy").fadeIn("slow");
        $("#strategy").animate({ scrollTop: 0 }, "slow");
        $("#navStrategy").parent().addClass("active");
    });
    $("#navPartnership").on('click', function () {
        removeClass();
        removeModals(4);
        currentLocation = 4;

        $("#partnership").fadeIn("slow");
        $("#partnership").animate({ scrollTop: 0 }, "slow");
        $("#navPartnership").parent().addClass("active");
    });
    $("#navCareer").on('click', function () {
        removeClass();
        removeModals(5);
        currentLocation = 5;

        $("#careers").fadeIn("slow");
        $("#careers").animate({ scrollTop: 0 }, "slow");
        $("#navCareer").parent().addClass("active");
    });
    $("#navContact").on('click', function () {
        removeClass();
        $("#navContact").parent().addClass("active");
    });

    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });    
    

    //====== Magnific Popup

    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });


    //===== Magnific Popup

    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    //===== Counter Up

    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });


    //===== testimonial active

    $('.testimonial-active').slick({
        dots: true,
        speed: 800,
        arrows: false,
        centerMode: true,
        centerPadding: "0",
        slidesToShow: 3,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    //=====  WOW active

    new WOW().init();


    //=====  particles


    if (document.getElementById("particles-1")) particlesJS("particles-1", {
        "particles": {
            "number": {
                "value": 40,
                "density": {
                    "enable": !0,
                    "value_area": 4000
                }
            },
            "color": {
                "value": ["#FFFFFF", "#FFFFFF", "#FFFFFF"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#fff"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 33,
                    "height": 33
                }
            },
            "opacity": {
                "value": 0.15,
                "random": !0,
                "anim": {
                    "enable": !0,
                    "speed": 0.2,
                    "opacity_min": 0.15,
                    "sync": !1
                }
            },
            "size": {
                "value": 50,
                "random": !0,
                "anim": {
                    "enable": !0,
                    "speed": 2,
                    "size_min": 5,
                    "sync": !1
                }
            },
            "line_linked": {
                "enable": !1,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": !0,
                "speed": 1,
                "direction": "top",
                "random": !0,
                "straight": !1,
                "out_mode": "out",
                "bounce": !1,
                "attract": {
                    "enable": !1,
                    "rotateX": 600,
                    "rotateY": 600
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": !1,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": !1,
                    "mode": "repulse"
                },
                "resize": !0
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1,
                    }
                },
                "bubble": {
                    "distance": 250,
                    "size": 0,
                    "duration": 2,
                    "opacity": 0,
                    "speed": 3
                },
                "repulse": {
                    "distance": 400,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": !0
    });

    if (document.getElementById("particles-2")) particlesJS("particles-2", {
        "particles": {
            "number": {
                "value": 40,
                "density": {
                    "enable": !0,
                    "value_area": 4000
                }
            },
            "color": {
                "value": ["#FFFFFF", "#FFFFFF", "#FFFFFF"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#fff"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 33,
                    "height": 33
                }
            },
            "opacity": {
                "value": 0.15,
                "random": !0,
                "anim": {
                    "enable": !0,
                    "speed": 0.2,
                    "opacity_min": 0.15,
                    "sync": !1
                }
            },
            "size": {
                "value": 50,
                "random": !0,
                "anim": {
                    "enable": !0,
                    "speed": 2,
                    "size_min": 5,
                    "sync": !1
                }
            },
            "line_linked": {
                "enable": !1,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": !0,
                "speed": 1,
                "direction": "top",
                "random": !0,
                "straight": !1,
                "out_mode": "out",
                "bounce": !1,
                "attract": {
                    "enable": !1,
                    "rotateX": 600,
                    "rotateY": 600
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": !1,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": !1,
                    "mode": "repulse"
                },
                "resize": !0
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1,
                    }
                },
                "bubble": {
                    "distance": 250,
                    "size": 0,
                    "duration": 2,
                    "opacity": 0,
                    "speed": 3
                },
                "repulse": {
                    "distance": 400,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": !0
    });






});


