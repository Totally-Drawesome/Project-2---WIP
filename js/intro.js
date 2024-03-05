//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function() {
 
    $("#hole1").hide();
    $("#hole2").hide();
    $("#hole3").hide();

    $("#seed1").hide();
    $("#seed2").hide();
    $("#seed3").hide();

    $("#dirt1").hide();
    $("#dirt2").hide();
    $("#dirt3").hide();

    $("#sapling1").hide();
    $("#sapling2").hide();
    $("#sapling3").hide(); 

    $("#smalltree1").hide();
    $("#smalltree2").hide();
    $("#smalltree3").hide();

    $("#tree1").hide();
    $("#tree2").hide();
    $("#tree3").hide();

    $("#bigtree1").hide();
    $("#bigtree2").hide();
    $("#bigtree3").hide();

    $("#action2").hide();
    $("#action3").hide();
    $("#action4").hide();
    $("#action5").hide();
    $("#action6").hide();
    $("#action7").hide();
    $("#action8").hide();
    $("#action9").hide();



    $("#stump1").click(function(){
        $("#stump1").hide();
        $("#hole1").show();

    });

    $("#stump2").click(function(){
        $("#stump2").hide();
        $("#hole2").show();

    });

    $("#stump3").click(function(){
        $("#stump3").hide();
        $("#hole3").show();

    });

    $("#hole1").click(function(){
        $("#hole1").hide();
        $("#seed1").show();

    });

    $("#hole2").click(function(){
        $("#hole2").hide();
        $("#seed2").show();

    });

    $("#hole3").click(function(){
        $("#hole3").hide();
        $("#seed3").show();

    });

    $("#action1").click(function(){
        $("#stump1").hide();
        $("#stump2").hide();
        $("#stump3").hide();
        $("#action1").hide();
        $("#hole1").show();
        $("#hole2").show();
        $("#hole3").show();
        $("#action2").show();
    });

    $("#action2").click(function(){
        $("#hole1").hide();
        $("#hole2").hide();
        $("#hole3").hide();
        $("#action2").hide();
        $("#seed1").show();
        $("#seed2").show();
        $("#seed3").show();
        $("#action3").show();
    });

    $("#action3").click(function(){
        $("#seed1").hide();
        $("#seed2").hide();
        $("#seed3").hide();
        $("#action3").hide();
        $("#dirt1").show();
        $("#dirt2").show();
        $("#dirt3").show();
        $("#action4").show();
    });

    $("#action4").click(function(){
        $("#dirt1").hide();
        $("#dirt2").hide();
        $("#dirt3").hide();
        $("#action4").hide();
        $("#sapling1").show();
        $("#sapling2").show();
        $("#sapling3").show();
        $("#action5").show();
    });

    $("#action5").click(function(){
        $("#sapling1").hide();
        $("#sapling2").hide();
        $("#sapling3").hide();
        $("#action5").hide();
        $("#smalltree1").show();
        $("#smalltree2").show();
        $("#smalltree3").show();
        $("#action6").show();
    });

    $("#action6").click(function(){
        $("#smalltree1").hide();
        $("#smalltree2").hide();
        $("#smalltree3").hide();
        $("#action6").hide();
        $("#tree1").show();
        $("#tree2").show();
        $("#tree3").show();
        $("#action7").show();
    });

    $("#action7").click(function(){
        $("#tree1").hide();
        $("#tree2").hide();
        $("#tree3").hide();
        $("#action7").hide();
        $("#bigtree1").show();
        $("#bigtree2").show();
        $("#bigtree3").show();
        $("#action8").show();
        $("#action9").show();
    });

    $("#action9").click(function(){
        $("#action8").hide();
        $("#action9").hide();
        $("#bigtree1").hide();
        $("#bigtree2").hide();
        $("#bigtree3").hide();
        $("#stump1").show();
        $("#stump2").show();
        $("#stump3").show();
        $("#action1").show();
    });

    $("#cat-img").click(function(){
       // $("#doggo-img").show();
        $("#cat-img").hide();
        $("#happy-doggo").show();
    });
    
    $("#happy-doggo").hide();

    $("#happy-doggo").click(function(){
        $("#doggo-img").show();
        $("#cat-img").hide();
        $("#happy-doggo").hide();
    });

    $("#secret-text").hide();

    //$("#super-secret").hide();

    $("#toggle-text").click(function(){
        $("#secret-text").toggle();
    });

    $("#change-color").click(function(){
        $("#home-screen").css("background-color", "khaki");
        $("#change-color").css("color", "white")
    });

    $("#secret-text").click(function(){
        $(".main-img").addClass("animate-img");
        
        setTimeout(function(){
            $(".main-img").removeClass("animate-img");
        }, 2000);

    });

    $("#secret-text").click(function(){
       // $("#super-secret").slideDown(5000);
       $("#super-secret").slideToggle(2000)
       // $("#super-secret").slideUp(5000);

    });

    $("#super-secret").click(function(){
        $("#happy-img").fadeToggle(2000).
        delay(2000).slideUp(5000);
    });


    $(".main-img").mouseenter(function(){
        $(".main-img").css("filter", "invert (100%)");


    });

    $(".main-img").mouseleave(function(){
        $(".main-img").css("filter", "invert (25%)");


    });

    $(document).keydown(function(event){
        if(event.key == "ArrowRight"){
            $("#popup").toggle();
            $(".main-img").toggle();
        }
        
        if(event.key == "ArrowLeft"){
            $("#home-screen").css("background-color", "khaki");
            console.log("left arrow is pressed")
        } 

    });

});