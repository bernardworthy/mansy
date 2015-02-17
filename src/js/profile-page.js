app.test = function(userId) {
  console.log(userId);

  app.api.userDetail(userId)
  .done(function(data) {
    console.log(data);
    var firstName = data.results[0].first_name;
    var loginName = data.results[0].login_name;
    var bio = data.results[0].bio;
    var city = data.results[0].city;
    var avatar = data.results[0].image_url_75x75;

    $('body').append('<img src="' + data.results[0].image_url_75x75 + '">');

  })
  .fail(function(req, status, err) {
    console.log(err);
  });
};
