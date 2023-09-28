var typed = new Typed(".text", {
    strings:["Front End Web Delevoper", "Web-Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true

});

$(document).ready(function() {
    $(`.skill-per`).each(function() {
      var $this = $(this);
      var percentage = $this.attr('percentage');
      $this.css("width", percentage + "%");
      $({
        animatedValue: 0
      }).animate({
        animatedValue: percentage
      }, {
        duration: 1300,
        step: function() {
          $this.attr("percentage", Math.floor(this.animatedValue));
        }
      });
    });
  });