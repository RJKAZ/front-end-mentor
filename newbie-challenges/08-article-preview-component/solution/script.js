


$(".share_button").on("click", function(){
    $(".images").fadeToggle(700);
    
    
    if ($(".share_button").attr("src") == "./images/icon-share.svg") {
        $(".share_button").toggle().attr("src", "./images/icon-share-white.svg");
        $(".share_button").toggle().css({"background" : "hsl(214, 17%, 51%)", "border-color":"hsl(214, 17%, 51%)"});
    } else {
        $(".share_button").toggle().attr("src", "./images/icon-share.svg");
        $(".share_button").toggle().css({"background" : "hsl(210, 46%, 95%)", "border-color":"hsl(210, 46%, 95%)"});
        

    }


});