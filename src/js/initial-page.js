app.api = app.EtsyApi({apiKey: 'pq046kugg8nrx8f2mu71awb7'});

app.showInitialPage = function () {

  app.api.listings()
    .done(function(data) {
      // console.log(data);
      var listingTemplate = _.template($('#listings').html(), {variable: 'm'});

      $('body').html(listingTemplate({items: data.results}));

      $('.profile-link').click(function(e) {
        var link = $(this);
        var item = link.parent().parent()[0];
        var userId = $(item).data('id');

        app.api.userDetail(userId)
        .done(function(data) {
          // console.log(data);
          var profileTemplate = _.template($('#profile').html(), {variable: 'm'});

          console.log(data);
          console.log(userId);
          $('<p>' + data.results[0].first_name + '</p>').insertBefore($('.text-content', item));
          // var firstName = data.results[0].first_name;
          // var loginName = data.results[0].login_name;
          // var bio = data.results[0].bio;
          // var city = data.results[0].city;
          // var avatar = data.results[0].image_url_75x75;



          // $('<img src="' + data.results[0].image_url_75x75 + '"/>').insertBefore($('.text-content'));

        })
        .fail(function(req, status, err) {
          console.log(err);
        });
      });

      // var image = data.results[0].MainImage.url_570xN;
      // var title = data.results[0].title;
      // var link = data.results[0].url;
      // var desc = data.results[0].description;
      // var price = data.results[0].price;
      // var currency = data.results[0].currency_code;
      // for (i = 0; i < data.results.length; i++) {
      //   var userId = data.results[i].user_id;
      //   app.test(userId);
      // }
      //
      // $('body').append('<img src="' + image + '">');
      // $('body').append('<h1>' + title + '</h1>');
      // $('body').append('<h3>' + price + ' ' + currency + '</h3>');
      // $('body').append('<a href="' + link + '">Check out the Posting Here!</a>');
      // $('body').append('<p>' + desc + '</p>');
      //

    })
    .fail(function(req, status, err) {
      console.log(err);
    });

};
