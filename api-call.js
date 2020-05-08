const fetch = require('isomorphic-unfetch');

exports.makeApiCall = function makeApiCall(url) {
  return fetch(url).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};
