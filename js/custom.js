
$(window).on("load", function() {

	$(".loader .inner").fadeOut(1500, function() {
		$(".loader").fadeOut(750);
	});

})



$(document).ready(function(){


    wow = new WOW(
        {
          animateClass: 'animated',
          offset:       100,
          callback:     function(box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
          }
        }
      );
      wow.init();
      document.getElementById('moar').onclick = function() {
        var section = document.createElement('section');
        section.className = 'section--purple wow fadeInDown';
        this.parentNode.insertBefore(section, this);
      };







}); 