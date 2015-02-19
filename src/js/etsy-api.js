app.EtsyApi = function (spec) {
  if (!spec.apiKey) {
    throw new Error('An API key is required!');
  }

  var baseUrl = 'https://openapi.etsy.com/' + (spec.apiVersion || 'v2');

  var self = {
    listings: function () {
      var url = baseUrl + '/listings/active.js?includes=MainImage&api_key=' + spec.apiKey + '&callback=?';
      var promise = $.Deferred();

      var req = $.getJSON(url).done(function (data) {
        if (!data.ok) {
          // Keep our rejection in line with the standard jQuery
          // rejection, passing req as first argument, status as second
          // and error object as the third
          promise.reject(req, 'Unknown error', data);
        } else {
          promise.resolve(data);
        }
      });

      return promise;
    },

    shopByUserId: function (user_id) {
      var url = baseUrl + '/users/' + user_id + '/shops.js?includes=MainImage&api_key=' + spec.apiKey + '&callback=?';
      var promise = $.Deferred();

      var req = $.getJSON(url).done(function (data) {
        if (!data.ok) {
          // Keep our rejection in line with the standard jQuery
          // rejection, passing req as first argument, status as second
          // and error object as the third
          promise.reject(req, 'Unknown error', data);
        } else {
          promise.resolve(data);
        }
      });

      return promise;
    },

    listingsByShopId: function (shop_id) {
      var url = baseUrl + '/shops/' + shop_id + '/listings/active.js?includes=MainImage&api_key=' + spec.apiKey + '&callback=?';
      var promise = $.Deferred();

      var req = $.getJSON(url).done(function (data) {
        if (!data.ok) {
          // Keep our rejection in line with the standard jQuery
          // rejection, passing req as first argument, status as second
          // and error object as the third
          promise.reject(req, 'Unknown error', data);
        } else {
          promise.resolve(data);
        }
      });

      return promise;
    },

    userDetail: function (userId) {
      /* TODO: Call the Etsy profile API */
      //users/19181170/profile.js?api_key=pq046kugg8nrx8f2mu71awb7&callback=
      var url = baseUrl + '/users/' + userId + '/profile.js?api_key=' + spec.apiKey + '&callback=?';
      var promise = $.Deferred();

      var req = $.getJSON(url).done(function(data) {
        if (!data.ok) {

          promise.reject(req, 'Unknown error', data);
        } else {
          promise.resolve(data);
        }
      });

      return promise;
    }
  };

  return self;
};
