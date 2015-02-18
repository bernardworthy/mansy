app.api = app.EtsyApi({apiKey: 'pq046kugg8nrx8f2mu71awb7'});
// Hash-based routing
function processHash() {
  var hash = location.hash || '#';

  app.router.run(hash.slice(1));

  // function iso() {
    // jQuery(window).load( function() {
    //   $('#container').isotope ({
    //     itemSelector: '.item',
    //     layoutMode : 'masonry'
    //     // masonry: {
    //     //   columnWidth: 50
    //     // }
    //   });
    // });
  // }
  // iso();

}

window.addEventListener('hashchange', processHash);
processHash();
