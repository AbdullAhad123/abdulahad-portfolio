// creating custom dropdown 
$(".nav_dropdown").click(function (event) {
    $(this).toggleClass("show");
    $(this).find(".nav_dropdown_box").toggleClass("d-none");
    $(this).siblings().removeClass("show");
    $(this).siblings().find(".nav_dropdown_box").addClass("d-none");
    $(this).siblings().find(".nav_dropdown_toggler").removeClass("toggle_dropdown_icon");
    $(this).find(".nav_dropdown_toggler").toggleClass("toggle_dropdown_icon");
    const imageUrl = $(this).data("image");
    $(this).find(".dropdown_list_image").css("background-image", "url('" + imageUrl + "')");
    event.stopPropagation(); // Prevent the event from bubbling up to the document body
});

// Close dropdown when clicking anywhere on the page except nav_dropdown_box
$(document.body).click(function (event) {
    if (!$(event.target).closest('.nav_dropdown_box').length) {
        $(".nav_dropdown_box").addClass("d-none");
        $(".nav_dropdown").removeClass("show");
        $(".nav_dropdown_toggler").removeClass("toggle_dropdown_icon");
    }
});

// dropdown elements images on hover 
$(".dropdown_list_item").mouseover(function () {
    var imageUrl = $(this).data('src');
    $(".dropdown_list_image").css("background-image", "url('" + imageUrl + "')");
});

// navbar scroll 
$(window).on('scroll load', function () {
    const scrolled = $(window).scrollTop();
    if (scrolled > 79) {
        $('.main_navbar').slideUp(300);
    } else {
        $('.main_navbar').slideDown(300);
    }
});

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

// validate contact form 
$("#submit_contact").click(function(e) {
    e.preventDefault();
    const name  = $('#full_name').val();
    const email  = $('#email').val();
    const message  = $('#message').val();

    if (name == '') {
        $("#full_name").focus();
        $(".name_error").text('Please enter a name');
    } else {
        $(".name_error").text('');
    }

    if (email == '') {
        $("#email").focus();
        $(".email_error").text('Please enter a email');
    } else {
        $(".email_error").text('');
    }

    if (message == '') {
        $("#message").focus();
        $(".message_error").text('Please enter a message');
    } else {
        $(".message_error").text('');
    }

    if (name && email && message) {
        $(this).find('i.bx').toggleClass('bx-paper-plane bx-loader-alt bx-spin');
        setTimeout(()=> {
            $(this).find('i.bx').toggleClass('bx-loader-alt bx-spin bx-paper-plane');
            $(".form_success_message").toggleClass('d-none d-flex');
        }, 2000);
    }

});

// subscribe_input
// subscribe_btn
// subscribe_form_error

$(".subscribe_btn").click(function (){
    const input = $('.subscribe_input').val();
    const rgex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (input == '') {
        $(".subscribe_input").addClass('text-danger');
        $(".subscribe_form_error").text('Please drop valid email here');
    } else if (!rgex.test(input)) {
        $(".subscribe_input").addClass('text-danger');
        $(".subscribe_form_error").text('Invalid email address');
    } else {
        $(".subscribe_input").removeClass('text-danger');
        $(".subscribe_form_error").text('');
        formSubmitAnimation();
    }
});

$('.subscribe_input').keyup(function (e) {
    const keycode = e.which || e.code;
    const input = $('.subscribe_input').val();
    const rgex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (keycode == 13) {
        $(".subscribe_btn").click();
    }

    if (input == '') {
        $(".subscribe_input").addClass('text-danger');
        $(".subscribe_form_error").text('Please drop valid email here');
    } else if (!rgex.test(input)) {
        $(".subscribe_input").addClass('text-danger');
        $(".subscribe_form_error").text('Invalid email address');
    } else {
        $(".subscribe_input").removeClass('text-danger');
        $(".subscribe_form_error").text('');
    }
});

function formSubmitAnimation () {
    $(".subscribe_btn").find('i.bx').toggleClass('bx-arrow-back bx-rotate-180 bx-loader-alt bx-spin');
    setTimeout(() => {
        $(".subscribe_btn").find('i.bx').toggleClass('bx-loader-alt bx-spin bx-arrow-back bx-rotate-180');
        $(".subscribe_form_error").toggleClass('text-danger text-success').text('Thanks for subscribing us!');
        setTimeout(() => {
            $(".subscribe_form_error").toggleClass('text-success text-danger').text('')
        }, 3000)
    }, 3200)
}
