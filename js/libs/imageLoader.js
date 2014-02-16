// Create a Promise for loading an image!
// Basically taking out the useful, tricky, and heavily refined bit from
// http://desandro.github.io/imagesloaded/
function imagePromise(src) {
    var deferred = $.Deferred();
    var img = new Image();

    function resolve() {
        // Resolution callbacks receive the image, which you can then inject into the DOM
        // to avoid triggering an extra HTTP request in IE
        return deferred.resolve(img);
    }

    // Resolution events
    $(img).on({
        error: deferred.reject,
        load: resolve
    });

    // Attach the source afterwards, since DOM synchronicity is weird:
    // A cached image will sometimes load or error on assignment
    img.src = src;

    // ...But sometimes cached images never fire load!
    // In this case they would already be in the DOM at this point. We need to infer it:
    if (img.complete && img.naturalWidth !== undefined) {
        // And then use setTimeout to resolve asynchronously (otherwise promise is broken!)
        setTimeout(resolve);
    }

    return deferred.promise();
}