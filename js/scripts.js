$(document).ready(function() {
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });

    //login modal control
    $("#btn_login").click(function(){
        $("#loginModal").modal('show')
    })
    $("#btn_cancel_login").click(function(){
        $("#loginModal").modal('hide')
    })
    $("#btn_close_login").click(function(){
        $("#loginModal").modal('hide')
    })


    //reserve table modal control
    $("#btn_reserve_table").click(function(){
        $("#reserveTableModal").modal('show')
    })
    $("#btn_close_reserve_table").click(function(){
        $("#reserveTableModal").modal('hide')
    })
    $("#btn_cancel_reserve_table").click(function(){
        $("#reserveTableModal").modal('hide')
    })


})