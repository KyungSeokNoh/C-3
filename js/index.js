$(function(){

    $(".main>li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    },function(){
        $(".sub").stop().slideUp();
    }) //

    // var i = 0; // 0 1 2
    // setInterval(function(){
    //     if( i == 2){
    //         i=0
    //     }else{
    //         i++;
    //     }

    //     $(".left_move").animate({"left" : i * (-800) + "px"},500)
    // },2000) //set

    setInterval(function(){
        $(".left_move").animate({left : "-800px"},500 , function(){
            $(".left_move").append($(".left_move li").eq(0));
            $(".left_move").css({left:"0"})
        }) //animate   
    },3000) //setInterval

    // 팝업
    $(".p_click").click(function(){
        $(".popup").show();
    })

    $(".close").click(function(){
        $(".popup").hide();
    })


})// jquery