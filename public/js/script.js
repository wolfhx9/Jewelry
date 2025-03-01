$(document).ready(function () {
    // Close Massage
    $("#close").click(function () {
        $("#Massage").slideUp();
        $("#Hero").css({ "margin-top": "91px", transition: "margin-top 0.5s" });
    });

    // Mobile Menu
    $("#menu-btn").click(function () {
        if ($("#menu").hasClass("hidden")) {
            $("#menu")
                .removeClass("hidden")
                .addClass("flex")
                .hide()
                .slideDown(600, function () {});
        } else {
            $("#menu").slideUp(600, function () {
                $(this).removeClass("flex").addClass("hidden");
            });
        }
        $(this).toggleClass("open");
    });

    // header background blur on scroll
    function updateHeader() {
        if ($(window).scrollTop() > 0) {
            $("header").addClass("bg-white/50 backdrop-blur-md");
        } else {
            $("header").removeClass("bg-white/50 backdrop-blur-md");
        }
    }

    $(window).on("scroll", updateHeader);
    updateHeader();

    // Our Featured Products Carousel
    var owl = $(".owl-carousel");

    owl.owlCarousel({
        loop: false,
        margin: 20,
        autoWidth: true,
        nav: false,
        dots: false,
        stagePadding: 50,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 },
        },
    });

    function updateNavButtons(event) {
        var currentIndex = event.item.index;

        if (currentIndex === 0) {
            $("#prev")
                .prop("disabled", true)
                .addClass("opacity-50 cursor-not-allowed");
        } else {
            $("#prev")
                .prop("disabled", false)
                .removeClass("opacity-50 cursor-not-allowed");
        }

        if (currentIndex === 6) {
            $("#next")
                .prop("disabled", true)
                .addClass("opacity-50 cursor-not-allowed");
        } else {
            $("#next")
                .prop("disabled", false)
                .removeClass("opacity-50 cursor-not-allowed");
        }
    }

    owl.on("initialized.owl.carousel changed.owl.carousel", function (event) {
        if (!event.namespace) return;
        updateNavButtons(event);
    });

    $("#prev").click(function () {
        owl.trigger("prev.owl.carousel");
    });

    $("#next").click(function () {
        owl.trigger("next.owl.carousel");
    });

    // // Scroll To Top Button
    var $scrollTopBtn = $("#STB");
    $(window).scroll(function () {
        var scrollPos = $(this).scrollTop();
        if (scrollPos > 1200) {
            if (!$scrollTopBtn.is(":visible")) $scrollTopBtn.fadeIn();
        } else {
            if ($scrollTopBtn.is(":visible")) $scrollTopBtn.fadeOut();
        }
    });

    $scrollTopBtn.click(function () {
        $("html, body").animate({ scrollTop: 0 }, 100);
    });
});
