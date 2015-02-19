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


  app.api.shopByUserId(r.params.userid)
  .done(function(data) {
    console.log(data);
    var shop_id = data.results[0].shop_id;

    app.api.listingsByShopId(shop_id)
    .done(function(data) {
      var listingTemplate = _.template($('#listings').html(), {variable: 'm'});
      $('#profile-listings').html(listingTemplate({items: data.results}));

    })
    .fail(function(req, status, err) {
      console.log(err);
    });
    // for (i = 0; i < data.results.length; i++) {
      // if (data.results[i].user_id === r.params.userid) {
  // $('#profile-listings').html(listingTemplate({items: data.results[0]}));
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
