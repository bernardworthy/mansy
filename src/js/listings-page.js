app.router.add('', function() {

  app.api.listings()
    .done(function(data) {
      console.log(data);
      var listingTemplate = _.template($('#listings').html(), {variable: 'm'});
      $('.main').html(listingTemplate({items: data.results}));
    })
    .fail(function(req, status, err) {
      console.log(err);
    });

});
