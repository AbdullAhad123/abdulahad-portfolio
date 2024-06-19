$(".email_form_input").on("keyup keypress keydown", function (e) {
  validateEmailForm();
  const keycode = e.which || e.keycode;
  if (keycode == 13) {
    submitEmail();
  }
});

$(".email_form_btn").click(function () {
  validateEmailForm();
  submitEmail();
});

function validateEmailForm() {
  const input = $(".email_form_input").val();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (input.length == "") {
    $(".email_error")
      .removeClass("text_light_success")
      .addClass("text_light_secondary")
      .html(`<i class='bx bx-x-circle me-1'></i>Email is required.`);
    return false;
  } else if (!emailRegex.test(input)) {
    $(".email_error")
      .removeClass("text_light_success")
      .addClass("text_light_secondary")
      .html(
        `<i class='bx bx-x-circle me-1'></i>Please enter a valid email address.`
      );
    return false;
  } else {
    $(".email_error")
      .removeClass("text_light_success")
      .addClass("text_light_secondary")
      .html("");
    return true;
  }
}

function submitEmail() {
  if (validateEmailForm()) {
    $(".email_form_btn")
      .find("i.bx")
      .toggleClass("bxs-chevron-right bx-loader-alt bx-spin");
    setTimeout(() => {
      $(".email_form_btn")
        .find("i.bx")
        .toggleClass("bxs-chevron-right bx-loader-alt bx-spin");
      $(".email_error")
        .removeClass("text_light_secondary")
        .addClass("text_light_success")
        .html(
          `<i class='bx bx-check-circle me-1'></i>Email submitted successfully!`
        );
    }, 2000);
  }
}

// image
const rocketPath = {
  curviness: 1.25,
  autoRotate: true,
  values: [{ width: "85%" }],
};

const tween = new TimelineLite();

tween.add(
  TweenLite.to(".tv_image", 1, {
    bezier: rocketPath,
    ease: Power1.easeInOut,
  })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: "#tvSection",
  duration: 5000,
  triggerHook: 0,
})
  .setTween(tween)
  .setPin("#tvSection")
  .addTo(controller);

// FAQ
$(".question_btn").click(function () {
  const cardContainer = $(this).siblings(".answer_container");
  const isCardShow = cardContainer.hasClass("show");

  if (!isCardShow) {
    $(".question_btn").removeClass("active");
    $(this).addClass("active");
    $(".answer_container").removeClass("show").slideUp();
    cardContainer.addClass("show").slideDown();
  } else {
    $(".question_btn").removeClass("active");
    $(".answer_container").removeClass("show").slideUp();
  }
});
