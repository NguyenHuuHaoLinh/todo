let signin = $("#signin");
signin.on("click", function () {
  const username = $("#username").val();
  const password = $("#password").val();
  console.log(username, password);
  $.ajax({
    url: `/user/create?usename=${username}&password=${password}`,
    type: "POST",
  })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      console.log(err);
    });
});
