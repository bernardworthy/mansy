// app.routingPage = function () {
//
//   // Our router
//   var r = Rlite();
//
//   // Home route
//   r.add('', function() {
//     document.title = 'PinterEtsy';
//   });
//
//   // #users/chris -> r.params.name will equal 'chris'
//   r.add('users/:userid', function (match) {
//     showUserProfile(match.params.userid);
//     // console.log(match.params.userid);
//   });
//
//   function showUserProfile(userId) {
//     // console.log(userId);
//     app.api.userDetail(userId)
//     .done(function(data) {
//       console.log(data);
//       var profileTemplate = _.template($('#profile').html(), {variable: 'm'});
//
//       $('body').html(profileTemplate({user: data.results[0]}));
//
//     })
//     .fail(function(req, status, err) {
//       console.log(err);
//     });
//   };
//
//   // // Hash-based routing
//   // function processHash() {
//   //   var hash = location.hash || '#';
//   //   r.run(hash.slice(1));
//   // }
//   //
//   // window.addEventListener('hashchange', processHash);
//   // processHash();
//
//   // TODO: We could improve this in many ways.
//   //
//   // One, every time we go to the #users or #users/foo route,
//   // we are requesting the HTML again. We ought to cache them,
//   // instead into an object (or hash table).
//   //
//   // Another thing, is we are recompiling the user.html template
//   // every time we show a user... We could cache the compiled
//   // templates, too, so they are compiled once they are downloaded
//   // and never again!
// };
