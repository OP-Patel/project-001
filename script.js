$(".list-icon").on("click", function(){
    $(".list-icon").css("display", "none");
    $(".x-icon").css("display", "unset");

    $(".x-icon").on("click", function(){
        $(".x-icon").css("display", "none");
        $(".list-icon").css("display", "unset")
        if ($(".inner-mobile-list").is(":visible")){
            $(".inner-mobile-list").css("display", "none");
        }
    });


    $(".inner-mobile-list").toggle(function(){
        $(".inner-mobile-list li").each(function(i) {
            $(this).delay(100 * i).fadeIn(500);
        });
    });


});
 