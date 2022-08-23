(function ($) {


if ($(window).width() > 991) {
$("ul.nav li.menu-item--expanded").hover(
    function(){
      //alert("fuck!");
      $(this).find("a.nav-link").addClass("show");
      $(this).find("ul.dropdown-menu").addClass("show");
    },function(){
      $(this).find("a.nav-link").removeClass("show");
      $(this).find("ul.dropdown-menu").removeClass("show");
    }
  );
}


})(jQuery);
