const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

document.addEventListener("click", (e) => {
  cursor.classList.add("expand");
  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});

// navbar scroll
$(window).scroll(function () {
  const scrolled = $(document).scrollTop();
  if (scrolled > 20) {
    $(".navbar").addClass("transform_navbar");
  } else {
    $(".navbar").removeClass("transform_navbar");
  }
});

// contact
$("#submitForm").click(function () {
  const fullName = $("#fullName").val();
  const email = $("#email").val();
  const phoneNumber = $("#phoneNumber").val();
  const message = $("#message").val();
  const nameRegex = /^[a-zA-Z\s'-]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // name
  if (fullName == "") {
    $("#fullName").addClass("is-invalid");
    $(".fullName_error").text("The name is required");
  } else if (!nameRegex.test(fullName)) {
    $("#fullName").addClass("is-invalid");
    $(".fullName_error").text("The name only contains alphabets");
  } else {
    $("#fullName").removeClass("is-invalid");
    $(".fullName_error").text("");
  }

  // email
  if (email == "") {
    $("#email").addClass("is-invalid");
    $(".email_error").text("The email is required");
  } else if (!emailRegex.test(email)) {
    $("#email").addClass("is-invalid");
    $(".email_error").text("The email is invalid");
  } else {
    $("#email").removeClass("is-invalid");
    $(".email_error").text("");
  }

  // phoneNumber
  if (phoneNumber == "") {
    $("#phoneNumber").addClass("is-invalid");
    $(".phoneNumber_error").text("The phone number is required");
  } else {
    $("#phoneNumber").removeClass("is-invalid");
    $(".phoneNumber_error").text("");
  }

  // message
  if (message == "") {
    $("#message").addClass("is-invalid");
    $(".message_error").text("The message is required");
  } else {
    $("#message").removeClass("is-invalid");
    $(".message_error").text("");
  }

  if (fullName && email && emailRegex.test(email) && phoneNumber && message) {
    $("#submitForm").find("i.bx").toggleClass("bxs-send bx-loader-alt bx-spin");
    setTimeout(() => {
      $("#submitForm")
        .find("i.bx")
        .toggleClass("bx-loader-alt bx-spin bxs-send");
      $(".form_alert").fadeIn();
    }, 3000);
  }
});

// hide and show password
$(".btn_password_actions").click(function (e) {
  e.preventDefault();
  const input = $(".password_input");
  const value = $("#password").val();
  const show_pass = $(this).find("i.bx");

  if (show_pass.hasClass("bx-show") == true) {
    show_pass.toggleClass("bx-show bx-hide");
    input
      .empty()
      .html(
        '<input type="text" class="form-control form_input fst_sans shadow-sm" id="password" value="' +
          value +
          '" placeholder="Enter your password">'
      );
  } else {
    show_pass.toggleClass("bx-show bx-hide");
    input
      .empty()
      .html(
        '<input type="password" class="form-control form_input fst_sans shadow-sm" id="password" value="' +
          value +
          '" placeholder="Enter your password">'
      );
  }
});

// toggle eye btton
$("#password").keyup(function () {
  if ($("#password").val().length > 0) {
    $(".btn_password_actions").fadeIn();
  } else {
    $(".btn_password_actions").fadeOut();
  }
});

// subscribe email
$("#subscribe_btn").click(function (e) {
  e.preventDefault();
  const input = $("#footer_input").val();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // subscribe_form
  // subscribe_form_message
  if (input == "") {
    $(".subscribe_form_message")
      .removeClass("text_peach")
      .addClass("text-danger")
      .text("Please enter a email first");
  } else if (!emailRegex.test(input)) {
    $(".subscribe_form_message")
      .removeClass("text_peach")
      .addClass("text-danger")
      .text("Please enter a valid email");
  } else {
    $(this)
      .empty()
      .html("<i class='bx bx-dots-horizontal-rounded bx-flashing fs-2' ></i>");
    setTimeout(() => {
      $(this).empty().html("Send");
      $(".subscribe_form_message")
        .removeClass("text-danger")
        .addClass("text_peach")
        .text("Thanks for subscribing us!");
    }, 2500);
  }
});

// preloader
let loader = document.querySelector(".window_preloader");

window.addEventListener("load", function () {
  setTimeout(() => {
    loader.style.transform = "translateY(-100%)";
  }, 2000);
});
