/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","898e5421c0276a5607366518154c79f3"],["/assets/css/main.css","78d316c3e3c8060f220a1a6970a11277"],["/assets/img/favicon.png","7a78244dfcc3998edd8e7af97d9bb93e"],["/assets/img/icons/android-chrome-192x192.png","4df4c8779d47bcaa69516050281773b9"],["/assets/img/icons/android-chrome-256x256.png","939ec88a61f407945a27d867fca1651d"],["/assets/img/icons/android-icon-144x144.png","a1bd45f815b3465faa389099e8307c71"],["/assets/img/icons/android-icon-192x192.png","2db29e897bcd6320f22113e8b55fc5bc"],["/assets/img/icons/android-icon-36x36.png","97b31ffb2f13594090794ea4dc25368b"],["/assets/img/icons/android-icon-48x48.png","e1658e8733458b600fea04d27c5712a3"],["/assets/img/icons/android-icon-72x72.png","e9343474e925ae8136c9eabf1cb79080"],["/assets/img/icons/android-icon-96x96.png","e03a5ecf265745ff6aa83efa8d9646e5"],["/assets/img/icons/apple-icon-114x114.png","4d936b30e1a3a3121044a63d642c8aad"],["/assets/img/icons/apple-icon-120x120.png","fcf4fa0fce0055ea2556d18d91ae437f"],["/assets/img/icons/apple-icon-144x144.png","a1bd45f815b3465faa389099e8307c71"],["/assets/img/icons/apple-icon-152x152.png","67a5abb1308d88802baba2db7acc67fa"],["/assets/img/icons/apple-icon-180x180.png","f3eeec3ac6dc631154766c5d1efa7b3c"],["/assets/img/icons/apple-icon-57x57.png","9aea84405826854ec2aaa50c54972298"],["/assets/img/icons/apple-icon-60x60.png","5b6a6c1bb0b28cabaf811e9468ed57db"],["/assets/img/icons/apple-icon-72x72.png","e9343474e925ae8136c9eabf1cb79080"],["/assets/img/icons/apple-icon-76x76.png","eb1a6c08ff44202345ba7829930f971f"],["/assets/img/icons/apple-icon-precomposed.png","0739b2dd535773b1163e7be874611ee8"],["/assets/img/icons/apple-icon.png","0739b2dd535773b1163e7be874611ee8"],["/assets/img/icons/apple-touch-icon.png","366666899d15cf8f6811cc73ee0d63de"],["/assets/img/icons/favicon-16x16.png","73f0819fa9fe2f3c53282192802d0efc"],["/assets/img/icons/favicon-32x32.png","0c7932756b8e1225c26f06e10827144b"],["/assets/img/icons/favicon-96x96.png","e03a5ecf265745ff6aa83efa8d9646e5"],["/assets/img/icons/icon-github.svg","4e06335104a29f91e08d4ef420da7679"],["/assets/img/icons/icon-instagram.svg","1e1119e2628235ee4c8771bff15eb2ca"],["/assets/img/icons/icon-twitter.svg","30551913d5399d6520e8a74b6f1e23f0"],["/assets/img/icons/ms-icon-144x144.png","a1bd45f815b3465faa389099e8307c71"],["/assets/img/icons/ms-icon-150x150.png","72fb3b6044192be6f52cc03661b55b77"],["/assets/img/icons/ms-icon-310x310.png","0d3fd191f5f8052a99abb203cf16427e"],["/assets/img/icons/ms-icon-70x70.png","d0a0f0a1a7b6bfe14d616c1021487c13"],["/assets/img/icons/mstile-150x150.png","1cea2ceb806d1a018330a51a1d8b73b6"],["/assets/img/icons/safari-pinned-tab.svg","398ef6b25c0f7f3f6e54c112a8facc5f"],["/assets/img/posts/add_products.png","1b860fb69dd5d5add10ed91233ede5a4"],["/assets/img/posts/blog_post_nn_block_diagram.png","b9829c936de6312a74b47ac6197b0d97"],["/assets/img/posts/category-screenshot.png","c72451d48e8ee8bf783840ccd6b763b5"],["/assets/img/posts/datahut-freetext.jpg","af0cc5b881cd10c048e535fbf790b901"],["/assets/img/posts/datahut-freetext_placehold.jpg","af0cc5b881cd10c048e535fbf790b901"],["/assets/img/posts/datahut-freetext_thumb.jpg","af0cc5b881cd10c048e535fbf790b901"],["/assets/img/posts/emile-perron-190221.jpg","4705474281b975b7a213b96e71f772e7"],["/assets/img/posts/emile-perron-190221_lg.jpg","aafe35b1dc6d9dc9293c8c2ef4121046"],["/assets/img/posts/emile-perron-190221_md.jpg","03ed35ed656429599daba312f0990a0f"],["/assets/img/posts/emile-perron-190221_placehold.jpg","67f40708f69ab671cee04d624258b85c"],["/assets/img/posts/emile-perron-190221_sm.jpg","4ce4178a62d5a456e90e7bc47bde50f5"],["/assets/img/posts/emile-perron-190221_thumb.jpg","f20085dfe2e36854f8a12f1fd6c50425"],["/assets/img/posts/emile-perron-190221_thumb@2x.jpg","b8fa22c3237de529316037f093b9cb4d"],["/assets/img/posts/emile-perron-190221_xs.jpg","ac32cbd525d72e932499668af5647d03"],["/assets/img/posts/gradient-blue.jpg","ee6f48abd7d7b2d7b4b77fb19a6743d9"],["/assets/img/posts/intercom.jpg","72d1cc990cc5717c4eb55074e5173519"],["/assets/img/posts/intercom_lg.jpg","72d1cc990cc5717c4eb55074e5173519"],["/assets/img/posts/intercom_md.jpg","72d1cc990cc5717c4eb55074e5173519"],["/assets/img/posts/intercom_placehold.jpg","72d1cc990cc5717c4eb55074e5173519"],["/assets/img/posts/intercom_sm.jpg","72d1cc990cc5717c4eb55074e5173519"],["/assets/img/posts/intercom_thumb.jpg","72d1cc990cc5717c4eb55074e5173519"],["/assets/img/posts/product_report.png","0f4a1f2e7ddad0a2ec1ab8cd19ce0132"],["/assets/img/posts/review_analysis_eg.png","3cc1070949b654e2fdc9ed94b01fab64"],["/assets/img/posts/scorecomputation.svg","da6668da905ef6e71b13bd7bfc93ffb3"],["/assets/img/posts/scorecomputationback.jpg","4f4fa0b3e4c90829ffd91e42f20405ee"],["/assets/img/posts/scorecomputationback_lg.jpg","4f4fa0b3e4c90829ffd91e42f20405ee"],["/assets/img/posts/scorecomputationback_md.jpg","4f4fa0b3e4c90829ffd91e42f20405ee"],["/assets/img/posts/scorecomputationback_placehold.jpg","4f4fa0b3e4c90829ffd91e42f20405ee"],["/assets/img/posts/scorecomputationback_thumb.jpg","4f4fa0b3e4c90829ffd91e42f20405ee"],["/assets/img/posts/screenshot-filters.png","b0e42fb66bd1a135a704bbbb804ed1f2"],["/assets/img/posts/screenshot-topics_table.png","fe2fbf0a9abd69c9937c0865a786dcd5"],["/assets/img/posts/shane-rounce-205187.jpg","bb774d6e05b2b55ffdabe11a8aac7c56"],["/assets/img/posts/shane-rounce-205187_lg.jpg","83cd838024fff9c3faec59fa1da97872"],["/assets/img/posts/shane-rounce-205187_md.jpg","628cf27bf658cf6de9df79ab9bf2cb2d"],["/assets/img/posts/shane-rounce-205187_placehold.jpg","249fc4a09bcfcbd7d5764f14c14ae82e"],["/assets/img/posts/shane-rounce-205187_sm.jpg","a2400a468e10d7d64528ac9c6bc3b6f0"],["/assets/img/posts/shane-rounce-205187_thumb.jpg","c3b2dd0d95a6d3a44d7702f8c06b1e78"],["/assets/img/posts/shane-rounce-205187_thumb@2x.jpg","b0722b63a92c92a44cd92c0201fc92a4"],["/assets/img/posts/shane-rounce-205187_xs.jpg","cd58fd23f3b3c1de2183beb9ed08327b"],["/assets/img/posts/sleek.jpg","a32252a618ffe8ae57c9ce9ab157a01b"],["/assets/img/posts/sleek_lg.jpg","95a1338aa524727f34950f269133e904"],["/assets/img/posts/sleek_md.jpg","4e35ceb2f5fffd3d758fade699b0b85a"],["/assets/img/posts/sleek_placehold.jpg","0f48050cd7776895b98c6ce21597ff39"],["/assets/img/posts/sleek_sm.jpg","f30af3d30b7df905d962e494750f5da0"],["/assets/img/posts/sleek_thumb.jpg","f7b8a94ac9da8e5ea36bb9e459872400"],["/assets/img/posts/sleek_thumb@2x.jpg","e67e2129dc58a100b98a5e027c964dbc"],["/assets/img/posts/sleek_xs.jpg","c8212cace6d446950556a3bf6efe4520"],["/assets/img/posts/sources.png","6f3ae161496ce14101448548e7709ac9"],["/assets/js/bundle.js","7bd6cfbe89a015370f5135cd784c0100"],["/categories/index.html","4ef9a55e8652ac7bd14ab9c7eaa7ef30"],["/freetext-datahut-partnership/index.html","5a570b7de8c545a02569197f4f7f66e4"],["/index.html","0ef44db6fef9c1f6ad06e97534fae34b"],["/intercom-chat-analysis/index.html","016dc9b4ab76bf72c9db0d580f448ac5"],["/reivew-topic-impact-score/index.html","795a4c5372518439d7d643d251472e50"],["/review-analysis-for-product-reviews/index.html","cc1c9866e0916c1694c3db21d14652e1"],["/sw.js","7635eb6bea0ec09e7160efffce009c8f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







