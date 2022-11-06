$(function () {
  $("#reg-form").validate({
    rules: {
      username: {
        required: true,
      },
      pass: {
        required: true,
        minlength: 5,
      },
    },
    messages: {
      username: {
        required: "Enter User Name*",
      },
      pass: {
        required: "Enter Password*",
        minlength: "Value must be valid*",
      },
    },
  });
  var signin = [];
  var signin = localStorage.getItem("signinList");
  signin = signin === null ? [] : JSON.parse(signin);

  var signup = localStorage.getItem("registerList");
  signup = signup === null ? [] : JSON.parse(signup);
  $("#submit").click(function (event) {
    event.preventDefault();
    var result = $("#reg-form").valid();
    console.log(result);
    if (result === false) return false;
    var inputvalue = {
      userid: $("#username").val(),
      pass: $("#password").val(),
    };
    signin.push(inputvalue);
    var newdata = $("#username").val();
    var newdata2 = $("#password").val();
    var outputValue = signup.find(function (value) {
      return value.username === newdata && value.password === newdata2;
    });
    if (outputValue === undefined) {
      alert("Username / Password is not matched");
    } else {
      localStorage.setItem("userlogin", outputValue);
      $("#username").val("");
      $("#password").val("");
      window.location.assign("./profile.html");
    }
  });
});
