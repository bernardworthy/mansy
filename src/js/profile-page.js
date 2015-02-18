app.router.add('users/:userid', function(r) {
  // console.log(userId);
  app.api.userDetail(r.params.userid)
  .done(function(data) {
    console.log(data.results[0]);
    var profileTemplate = _.template($('#profile').html(), {variable: 'm'});
    $('#container').html(profileTemplate({user: data.results[0]}));
    // var profileTemplate = _.template($('#profile').html(), {variable: 'm'});
    // console.log(profileTemplate({user: data.results[0]}));
    // $('.main').html(profileTemplate({user: data.results[0]}));
  })
  .fail(function(req, status, err) {
    console.log(err);
  });

  app.api.listingsByUserId(r.params.userid)
  .done(function(data) {
    console.log(data);
    var listingTemplate = _.template($('#listings').html(), {variable: 'm'});

    // for (i = 0; i < data.results.length; i++) {
      // if (data.results[i].user_id === r.params.userid) {
        $('#profile-listings').html(listingTemplate({items: data.results}));
      // }
    // }

  })
  .fail(function(req, status, err) {
    console.log(err);
  });

  $(document).scrollTop(0);

  //
  // $(window).on('beforeunload', function() {
  //   $(window).scrollTop(0);
  // });

});
