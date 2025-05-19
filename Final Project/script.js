$(document).ready(function () {
  $('.hero h1, .hero p').hide().fadeIn(1000);

  $('nav a').on('click', function () {
    $('nav a').removeClass('active');
    $(this).addClass('active');
  });

  $('nav a').hover(
    function () {
      $(this).css({
        transform: 'scale(1.1)',
        boxShadow: '0 0 10px #00ffe1'
      });
    },
    function () {
      $(this).css({
        transform: 'scale(1)',
        boxShadow: 'none'
      });
    }
  );
});
