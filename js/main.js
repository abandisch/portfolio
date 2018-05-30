const navigate = () => {
  $('nav').on('click', '.scroll-to', function(event) {
    event.preventDefault();
    const whereTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(whereTo).offset().top
    }, 600);
  });
};

$(navigate());
