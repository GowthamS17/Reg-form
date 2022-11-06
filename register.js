$(function () {
  // validation
  $(function () {
    $("#reg-form").validate({
      rules: {
        fname: {
          required: true,
        },
        pnumber: {
          required: true,
          minlength: 10,
          maxlength: 12,
        },
        email: {
          required: true,
          email: true,
        },
        uname: {
          required: true,
        },
        pass: {
          required: true,
          minlength: 5,
        },
        cpass: {
          required: true,
          equalTo: "#pass",
        },
      },
      messages: {
        fname: {
          required: "Enter Full Name*",
        },
        pnumber: {
          required: "Enter Mobile Number*",
          minlength: "Invalid Number*",
          maxlength: "Invalid Number*",
        },
        email: {
          required: "Enter Email*",
        },
        uname: {
          required: "Enter User Name*",
        },
        pass: {
          required: "Enter Password*",
          minlength: "Value must be valid*",
        },
        cpass: {
          required: "Enter Password*",
          equalTo: "Enter the same password again*",
        },
      },
    });
    $("#submit").on("click", function (event) {
      event.preventDefault();
      var result = $("#reg-form").valid();
      console.log(result);
    });
  });
});
$(document).ready(function () {
  var signup = [];
  var signup = localStorage.getItem("registerList");
  signup = signup === null ? [] : JSON.parse(signup);

  $("#submit").click(function (event) {
    event.preventDefault();

    var input = {
      fullname: $("#fname").val(),
      phonenumber: $("#pnumber").val(),
      emailid: $("#email").val(),
      username: $("#uname").val(),
      password: $("#pass").val(),
      confirmpassword: $("#cpass").val(),
    };
    signup.push(input);
    manageLS();
    console.log(signup);
  });
  function manageLS() {
    localStorage.setItem("registerList", JSON.stringify(signup));
  }
});
