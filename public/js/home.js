$.ajax({
  url: "http://localhost:3000/user",
  type: "GET",
})
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });
