const   hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElement = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
} );

closeElement.addEventListener('click', () => {
    menu.classList.remove('active')
} );

const   pct = document.querySelectorAll('.skills__progress_pct'),
        scale = document.querySelectorAll('.skills__progress_scale span');

pct.forEach( (item, i) => {
    scale[i].style.width = item.innerHTML;
});

$('#contacts__form').validate({
    rules: {
        name: 'required',
        email: {
            required: true,
            email: true
        }
    },
    messages: {
        name: "Пожалуйста введите свое имя!",
        email: {
          required: "Пожалуйста введите свою почту!",
          email: "Ваш адрес электронной почты должен быть в формате name@domain.com"
        }
    },
    /* invalidHandler: function(event, validator){
        $('.contacts__input').css('margin-bottom', '30px');
    }  */
});

$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find('input').val("");
      $('.overlay, #thanks').fadeIn('slow');
      $('form').trigger('reset');
    });
    return false;
});

//Smooth scrol and page up

$(window).scroll(function() {
    if ($($(this)).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
});

$("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

$('.modal__close').on('click', function() {
    $('.overlay').fadeOut('slow');
});



    
