var app={};app.EtsyApi=function(e){if(!e.apiKey)throw new Error("An API key is required!");var i="https://openapi.etsy.com/"+(e.apiVersion||"v2"),n={listings:function(){var n=i+"/listings/active.js?includes=MainImage&api_key="+e.apiKey+"&callback=?",r=$.Deferred(),t=$.getJSON(n).done(function(e){e.ok?r.resolve(e):r.reject(t,"Unknown error",e)});return r},userDetail:function(n){var r=i+"/users/"+n+"/profile.js?api_key="+e.apiKey+"&callback=?",t=$.Deferred(),a=$.getJSON(r).done(function(e){e.ok?t.resolve(e):t.reject(a,"Unknown error",err)});return t}};return n},app.api=app.EtsyApi({apiKey:"pq046kugg8nrx8f2mu71awb7"}),app.showInitialPage=function(){app.api.listings().done(function(e){console.log(e);var i=_.template($("#listings").html(),{variable:"m"});$("body").html(i({items:e.results}));var n=e.results[0].user_id;app.test(n)}).fail(function(e,i,n){console.log(n)})},app.test=function(e){console.log(e),app.api.userDetail(e).done(function(e){console.log(e);e.results[0].first_name,e.results[0].login_name,e.results[0].bio,e.results[0].city,e.results[0].image_url_75x75}).fail(function(e,i,n){console.log(n)})},app.showInitialPage();
//# sourceMappingURL=app.js.map