const navigate = () => {
  $('nav').on('click', 'a', function(event) {
    event.preventDefault();
    const whereTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(whereTo).offset().top
    }, 600);
  });
};

$(navigate());
