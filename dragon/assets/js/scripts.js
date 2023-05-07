$(document).ready(function() {

    $('.fade').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      slide: 'div',
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2000
    });

    /* Set the width of the side navigation to 250px */
    function openNav() {
        document.getElementById("mySidenav").style.width = "300px";
      }
      
      /* Set the width of the side navigation to 0 */
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      } 
      
      var post= document.getElementById("post");
  post.addEventListener("click", function(){
      var commentBoxValue= document.getElementById("comment-box").value;
   
      var li = document.createElement("li");
      var text = document.createTextNode(commentBoxValue);
      li.appendChild(text);
      document.getElementById("unordered").appendChild(li);
  
  });
});