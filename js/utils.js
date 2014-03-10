/**
 * [loadAssets description]
 * @param  {[type]} assets [description]
 * @return {[type]}        [description]
 */

function loadAssets(assets, fn) {
  var promises = [];

  for (var i = 0; i < assets.length; i++) {
    var promise = imagePromise(assets[i]);
    promises.push(promise);
  }

  $.when.apply($, promises).done(function () {

    for (var i = 0; i < arguments.length; i++) {

      Registry.cachedImages[$(arguments[i]).attr('src')] = arguments[i];
      //window.console.log($(arguments[i]).attr('src'));
    }

    fn(assets);

  });

}

/**
 * [checkSize description]
 * @return {[type]} [description]
 */

function checkSize() {

  var w = $(window).width();
  var h = $(window).height();

  var hPerc = (h - 20) / 1024;
  var wPerc = 810 / w;

  var finalW = Math.round(810 * hPerc);
  window.console.log(wPerc, finalW);

  if (h < 1024) {
    Registry.scale = hPerc;
  } else {
    Registry.scale = 1;
  }
}