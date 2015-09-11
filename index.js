/**
 * Created by Echo on 2015/9/8.
 */


$(function(){


    $(".container").on("click", ".firstMenu", function(){
        var $this = $(this);
        if(!$this.hasClass("open")){
            $this.find("ul").show();
            $this.addClass("open");
        } else {
            $this.removeClass("open");
            $this.find("ul").hide();
        }
    })

    $(".container").on("click", ".secondMenu a", function(){
        var $this = $(this);
        $(".container").hide();


        /*点击a标签时回调函数*/
        showTest();
    })
})

function showTest(){
    console.log("click")
}