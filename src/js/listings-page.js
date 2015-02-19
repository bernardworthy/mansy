app.router.add('', function() {

  app.api.listings()
  .done(function(data) {
    console.log(data);
    var listingTemplate = _.template($('#listings').html(), {variable: 'm'});
    $('#container').html(listingTemplate({items: data.results}));
  })
  .fail(function(req, status, err) {
    console.log(err);
  });

  $(document).ready(function() {
  	$(".text-content").dotdotdot();
  });

  // jQuery(window).load( function() {
  //   $('#container').isotope ({
  //     itemSelector: '.item',
  //     layoutMode : 'masonry'
  //     // masonry: {
  //     //   columnWidth: 50
  //     // }
  //   });
  // });

  // $(document).scrollTop(0);

  // $(window).on('beforeunload', function() {
  //   $(window).scrollTop(0);
  // });
});
