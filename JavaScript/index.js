$(function() {
  window.sr = ScrollReveal();

  // Common reveal settings
  const revealConfig = {
    distance: '300px',
    easing: 'ease-in-out',
    duration: 800,
  };

  // Apply different origin based on screen width
  if ($(window).width() < 768) {
    $('.timeline-content.js--fadeInLeft').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
    sr.reveal('.js--fadeInRight', { ...revealConfig, origin: 'right' });
  } else {
    sr.reveal('.js--fadeInLeft', { ...revealConfig, origin: 'left' });
    sr.reveal('.js--fadeInRight', { ...revealConfig, origin: 'right' });
  }
});
