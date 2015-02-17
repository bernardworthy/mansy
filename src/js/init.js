app.api = app.EtsyApi({apiKey: 'pq046kugg8nrx8f2mu71awb7'});
// Hash-based routing
function processHash() {
  var hash = location.hash || '#';

  app.router.run(hash.slice(1));
}

window.addEventListener('hashchange', processHash);
processHash();
