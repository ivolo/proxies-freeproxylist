
# proxies-freeproxylist

  Scrapes the public proxies list from [free-proxy-list.net](http://free-proxy-list.net/). Primarily used as a proxies source list to [proxies](https://github.com/ivolo/proxies).


## Example

Get a list of public proxies:

```js
var Scraper = require('scraper');
var FreeProxyList = require('proxies-freeproxylist');
var Proxies = require('proxies');

Scraper(function (err, scraper) {
  var freeproxylist = FreeProxyList(scraper);
  freeproxylist(function (err, proxies) {
    // a list of proxies
  });
});
```

And integrate into [proxies](https://github.com/ivolo/proxies) as a source:

```js
var Scraper = require('scraper');
var FreeProxyList = require('proxies-freeproxylist');
var Proxies = require('proxies');

Scraper(function (err, scraper) {
  var freeproxylist = FreeProxyList(scraper);
  var proxies = Proxies()
    .source(freeproxylist);

  // use proxies
});
```

## API

#### FreeProxyList(scraper)

  Create a new FreeProxyList `scraper` instance.

#### freeproxylist(callback)

  Get a list of public proxies.


## Licence

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```