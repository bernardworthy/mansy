app.router.add('users/:userid', function(r) {
      // console.log(userId);
    app.api.userDetail(r.params.userid)
    .done(function(data) {
      console.log(data.results[0]);
      var profileTemplate = _.template($('#profile').html(), {variable: 'm'});
      $('.main').html(profileTemplate({user: data.results[0]}));
      // var profileTemplate = _.template($('#profile').html(), {variable: 'm'});
      // console.log(profileTemplate({user: data.results[0]}));
      // $('.main').html(profileTemplate({user: data.results[0]}));
    })
    .fail(function(req, status, err) {
      console.log(err);
    });

});
