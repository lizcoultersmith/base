
/* SCRIPTS.JS */

function changePic() {
    document.getElementById("profilePic").src = "images/lizzie.jpg";
  }
  
  function normalPic() {
    document.getElementById("profilePic").src = "images/me_2017bw.jpg";
  }


$(".go-to-contact").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 1000);
});

/*


function changePic() {
    document.getElementById("profilePic").src = "images/me_2017bw.jpg";
  }
  
  function normalPic() {
    document.getElementById("profilePic").src = "images/lizzie..jpg";
  }
  */