// whatsapp chat
$(document).on("click", "#send-it", function () {
    var a = document.getElementById("chat-input");
    if ("" != a.value) {
      var b = $("#get-number").text(),
        c = document.getElementById("chat-input").value,
        d = "https://web.whatsapp.com/send",
        e = b,
        f = "&text=" + c;
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      )
        var d = "whatsapp://send";
      var g = d + "?phone=+971 54 590 0734" + e + f;
      window.open(g, "_blank");
    }
  }),
    $(document).on("click", ".informasi", function () {
      (document.getElementById("get-number").innerHTML = $(this)
        .children(".my-number")
        .text()),
        $(".start-chat,.get-new").addClass("show").removeClass("hide"),
        $(".home-chat,.head-home").addClass("hide").removeClass("show"),
        (document.getElementById("get-nama").innerHTML = $(this)
          .children(".info-chat")
          .children(".chat-nama")
          .text()),
        (document.getElementById("get-label").innerHTML = $(this)
          .children(".info-chat")
          .children(".chat-label")
          .text());
    }),
    $(document).on("click", ".close-chat", function () {
      $("#whatsapp-chat").addClass("hide").removeClass("show");
    }),
    $(document).on("click", ".blantershow-chat", function () {
      $("#whatsapp-chat").addClass("show").removeClass("hide");
    });

//Global variables
var element;

//Custom cursor
(() => { 

   const cursor = document.querySelector('.cursor');
   document.addEventListener('mousemove', e => {
      cursor.setAttribute('style', `top:  ${e.pageY - 20}px; left: ${e.pageX - 20}px;`);
   });
})();

//Detect onclick event
if (window.matchMedia("(max-width: 920px)").matches === false) {
    $(".ham").on("click", function(){
        $("menu").css("right", "0px");
        $(".overlay").css("opacity","1");
        $(".overlay").css("z-index","99");
    });

    $(".close").on("click", function(){
        $("menu").css("right", "-400px");
        $(".overlay").css("opacity","0");
        $(".overlay").css("z-index","-1");
    });

    $(".overlay").on("click", function(){
        $("menu").css("right", "-400px");
        $(".overlay").css("opacity","0");
        $(".overlay").css("z-index","-1");
    });
} else {
    $(".ham").on("click", function(){
        $(".nav_content").css("right", "0px");
        $(".overlay").css("opacity","1");
        $(".overlay").css("z-index","1");
    });
    
    $(".close").on("click", function(){
        $(".nav_content").css("right", "-200px");
        $(".overlay").css("opacity","0");
        $(".overlay").css("z-index","-1");
    });
    
    $(".overlay").on("click", function(){
        $(".nav_content").css("right", "-200px");
        $(".overlay").css("opacity","0");
        $(".overlay").css("z-index","-1");
    });
}

//Scroller Nav
window.onscroll = function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("nav").css("background-color","var(--black)") ;
    } else {
        $("nav").css("background-color","transparent") ;
    }
}

// split screen js
const LEFT = document.querySelector(".left");
const RIGHT = document.querySelector(".right");
const CONTAINER = document.querySelector(".formchoice");

LEFT.addEventListener("mouseenter", () => {
  CONTAINER.classList.add("hover-left");
});
LEFT.addEventListener("mouseleave", () => {
  CONTAINER.classList.remove("hover-left");
});

RIGHT.addEventListener("mouseenter", () => {
  CONTAINER.classList.add("hover-right");
});
RIGHT.addEventListener("mouseleave", () => {
  CONTAINER.classList.remove("hover-right");
});



  
  