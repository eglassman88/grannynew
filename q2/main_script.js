var stripesAnim;
var calcPercent;

var $stripes = $('.progress-stripes');
$stripes.text('////////////////////////');

stripesAnimate();

function load() {
  $('#showmodal').attr('checked', true);
  var text = [{
      text: 'Checking If You Are Eligible For Any Grounded Footwear Promotions...',
      wait: 4,
      percent: 44,
      color: 'yellow',
    },
    {
      text: 'Congratulations, You Qualified For The Promotion!',
      wait: 4,
      percent: 44,
      color: 'green',
    },
    {
      text: 'Checking For Available Stock...',
      wait: 4,
      percent: 78,
      color: 'yellow',
    },
    {
      text: 'Limited Stock is Available! Reserving It For You',
      wait: 3,
      percent: 100,
      color: 'green',
    },
  ];
  f(0);

  function f(i) {
    if (text[i].color === 'green') $('.loader').removeClass('yellow');
    if (text[i].color === 'yellow') $('.loader').removeClass('green');
    $('.loader').addClass(text[i].color);
    $('.progress-text').text(text[i].text);
    $('.progress-bar').width(text[i].percent + '%');
    if (i < text.length - 1)
      setTimeout(function () {
        f(i + 1);
      }, text[i].wait * 1000);
    else
      setTimeout(function () {
        ctaLink();
      }, text[i].wait * 1000);
  }
  setInterval(function () {
    var percent =
      Math.round(
        100 *
        parseFloat($('.progress-bar').css('width')) /
        parseFloat(
          $('.progress-bar')
          .parent()
          .css('width')
        )
      ) + '%';

    $('.percentage').text(percent);
  }, 100);
}

function stripesAnimate() {
  animating();
  stripesAnim = setInterval(animating, 2500);
}

function animating() {
  $stripes
    .animate({
        marginLeft: '-=30px',
      },
      2500,
      'linear'
    )
    .append('/');
}

$(function () {
  var pull = $('#pull');
  menu = $('nav ul');
  menuHeight = menu.height();
  $(pull).on('click', function (e) {
    e.preventDefault();
    menu.slideToggle();
  });
  $(window).resize(function () {
    var w = $(window).width();
    if (w > 320 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
});