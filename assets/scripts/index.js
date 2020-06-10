$(() => {
  // smooth transition on nav link click
  $('a.toscroll').on('click', function (e) {
    const url = e.target.href
    const hash = url.substring(url.indexOf('#') + 1)
    $('html, body').animate({
      scrollTop: $('#' + hash).offset().top - 20
    }, 1300)
    return false
  })

  // back to top button
  const btn = $('#back-to-top')

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show')
    } else {
      btn.removeClass('show')
    }
  })

  btn.on('click', function (e) {
    e.preventDefault()
    $('html, body').animate({
      scrollTop: 0
    }, '300')
  })

  $('i').mouseover(function () {
    const name = $(this).attr('name')
    $('p', this).html(name)
  })

  $('i').mouseout(function () {
    $('p', this).html('')
  })

  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    var windowTop = $(this).scrollTop();

    $(".fade-scroll").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      var objectTop = $(this).offset().top + $(this).outerHeight() - $(this).height();
      /* If the element is out of bounds of the window then fade it out */
      if (objectBottom - 150 < windowTop || objectTop + 150 > windowBottom) { // object fades out
        if ($(this).css("opacity")==1) {$(this).fadeTo(400,0);}
      } else { //object comes into view
        if ($(this).css("opacity")==0) {$(this).fadeTo(400,1);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
})
