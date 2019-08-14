$(() => {
  // smooth transition on nav link click
  $('a.toscroll').on('click', function (e) {
    const url = e.target.href
    const hash = url.substring(url.indexOf('#') + 1)
    $('html, body').animate({
      scrollTop: $('#' + hash).offset().top
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
})
