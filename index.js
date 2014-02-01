
/**
 * Expose the `scrape`.
 */

module.exports = scrape;

/**
 * Return a Free Proxy List site scraper.
 *
 * @param {Scraper} scraper
 * @return {Function}
 */
function scrape (scraper) {
  return function (callback) {
    scraper.readyPage('http://free-proxy-list.net/', function (err, page) {
      if (err) {
        page.close();
        callback(err);
      } else {
        parseList(page, function (err, proxies) {
          page.close();
          callback(err, proxies);
        });
      }
    });
  };
}

/**
 * Parses the IP table list.
 *
 * @param {Page} page
 * @param {Function} callback
 */

function parseList (page, callback) {

  page.evaluate(function () {
    var proxies = [];

    for (var i = 1; i < proxylisttable.rows.length-1; i += 1) {
      var row = proxylisttable.rows[i];
      var ip = row.cells[0].innerText;
      var port = row.cells[1].innerText;
      proxies.push('http://' + ip + ':' + port);
    }

    return proxies;

  }, function (proxies) {
    return callback(null, proxies);
  });
}