app.api = app.EtsyApi({apiKey: 'pq046kugg8nrx8f2mu71awb7'});

app.showInitialPage = function () {

  app.api.listings()
    .done(function(data) {
      console.log(data);
      var listingTemplate = _.template($('#listings').html(), {variable: 'm'});

      $('body').html(listingTemplate({items: data.results}));

      // var image = data.results[0].MainImage.url_570xN;
      // var title = data.results[0].title;
      // var link = data.results[0].url;
      // var desc = data.results[0].description;
      // var price = data.results[0].price;
      // var currency = data.results[0].currency_code;
      // var userId = data.results[0].user_id;
      //
      // $('body').append('<img src="' + image + '">');
      // $('body').append('<h1>' + title + '</h1>');
      // $('body').append('<h3>' + price + ' ' + currency + '</h3>');
      // $('body').append('<a href="' + link + '">Check out the Posting Here!</a>');
      // $('body').append('<p>' + desc + '</p>');
      //
      // app.test(userId);

    })
    .fail(function(req, status, err) {
      console.log(err);
    });

};
