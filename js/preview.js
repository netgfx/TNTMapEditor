$(document).ready(function () {

    var data = store("preview");

     var assetsList = [
    "assets/tiles/bg/w.png",
    "assets/tiles/bg/w1.png",
    "assets/tiles/bg/w2.png",
    "assets/tiles/bg/w3.png",
    "assets/tiles/bg/w4.png",
    "assets/tiles/bg/w5.png",
    "assets/tiles/bg/w6.png",
    "assets/tiles/bg/w7.png",
    "assets/tiles/bg/w8.png",
    "assets/tiles/bg/w9.png",
    "assets/tiles/bg/w10.png",
    "assets/tiles/bg/w11.png",
    "assets/tiles/bg/w12.png",
    "assets/tiles/bg/wg1.png",
    "assets/tiles/bg/wg2.png",
    "assets/tiles/bg/wg3.png",
    "assets/tiles/bg/wg4.png",
    "assets/tiles/bg/wg5.png",
    "assets/tiles/bg/wg6.png",
    "assets/tiles/bg/wg7.png",
    "assets/tiles/bg/wg8.png",
    "assets/tiles/bg/t0.png",
    "assets/tiles/bg/t0.png",
    "assets/tiles/bg/d0.png",
    "assets/tiles/bg/d1.png",
    "assets/tiles/bg/d2.png",
    "assets/tiles/bg/d3.png",
    "assets/tiles/bg/d4.png",
    "assets/tiles/bg/mp1.png",
    "assets/tiles/bg/mp2.png",
    "assets/tiles/bg/mp3.png",
    "assets/tiles/bg/mp4.png",
    "assets/tiles/bg/mp5.png",
    "assets/tiles/bg/mp6.png",
    "assets/tiles/bg/mp7.png",
    "assets/tiles/bg/mp8.png",
    "assets/tiles/bg/mp9.png",
    "assets/tiles/bg/mp10.png",
    "assets/tiles/bg/mp11.png",
    "assets/tiles/bg/mp12.png",
    "assets/tiles/bg/mp13.png",
    "assets/tiles/bg/mp14.png",
    "assets/tiles/bg/mp15.png",
    "assets/tiles/bg/mp16.png",
    "assets/tiles/bg/mp17.png",
    "assets/tiles/bg/mp18.png",
    "assets/tiles/bg/mp19.png",
    "assets/tiles/bg/mp20.png",
    "assets/tiles/bg/mp21.png",
    "assets/tiles/bg/mp22.png",
    "assets/tiles/bg/mp23.png",
    "assets/tiles/bg/mp24.png",
    "assets/tiles/bg/mp25.png",
    "assets/tiles/bg/mp26.png",
    "assets/tiles/bg/mp27.png",
    "assets/tiles/bg/mp28.png",
    "assets/tiles/bg/mp29.png",
    "assets/tiles/bg/mp30.png",
    "assets/tiles/bg/mp31.png",
    "assets/tiles/bg/mp32.png",
    "assets/tiles/bg/mp33.png",
    "assets/tiles/bg/mp34.png",
    "assets/tiles/bg/mp35.png",
    "assets/tiles/bg/mp36.png",
    "assets/tiles/bg/mp37.png",
    "assets/tiles/bg/mp38.png",
    "assets/tiles/bg/p1.png",
    "assets/tiles/bg/p2.png",
    "assets/tiles/bg/p3.png",
    "assets/tiles/bg/p4.png",
    "assets/tiles/bg/t1.png",
    "assets/tiles/bg/t2.png",
    "assets/tiles/bg/t3.png",
    "assets/tiles/bg/t4.png",
    "assets/tiles/bg/t5.png",
    "assets/tiles/bg/t6.png",
    "assets/tiles/bg/t7.png",
    "assets/tiles/bg/t8.png",
    "assets/tiles/bg/pe1.png",
    "assets/tiles/bg/pe2.png",
    "assets/tiles/bg/pe3.png",
    "assets/tiles/bg/pe4.png",
    "assets/tiles/bg/mp2.png",
    "assets/tiles/bg/mp3.png",
    "assets/tiles/bg/mp4.png",
    "assets/tiles/bg/mp5.png",
    "assets/tiles/items/clear.png"
  ];

    var doodleList = [
    "assets/tiles/items/doodle1.png",
    "assets/tiles/items/doodle2.png",
    "assets/tiles/items/doodle3.png",
    "assets/tiles/items/doodle4.png",
    "assets/tiles/items/doodle5.png",
    "assets/tiles/items/doodle6.png",
    "assets/tiles/items/doodle7.png",
    "assets/tiles/items/doodle8.png",
    "assets/tiles/items/doodle9.png",
    "assets/tiles/items/doodle10.png",
    "assets/tiles/items/doodle11.png",
    "assets/tiles/items/doodle12.png",
    "assets/tiles/items/doodle13.png",
    "assets/tiles/items/doodle14.png",
    "assets/tiles/items/doodle15.png",
    "assets/tiles/items/doodle16.png",
    "assets/tiles/items/doodle17.png",
    "assets/tiles/items/doodle18.png",
    "assets/tiles/items/markX.png",
    "assets/tiles/items/treasure.png",
    "assets/tiles/items/gem.png",
    "assets/tiles/items/clear.png",
    "assets/tiles/items/point.png",
    "assets/tiles/items/skull.png"
  ];

    loadAssets(doodleList, function(){
        loadAssets(assetsList, createMap);
    });


    var stage = new Kinetic.Stage({
        container: 'map',
        width: data.width,
        height: data.height
    });

    var layer = new Kinetic.Layer();

    stage.add(layer);

    Registry.stage = stage;
    Registry.layer = layer;

});

function createMap(data) {
    data = store("preview");

    var w = data.width / data.blocksize;
    var h = data.height / data.blocksize;

    var tiles;
    var extras;
    var row;
    var eRow;
    json = JSON.parse(data.json);
    tiles = json.tiles;
    extras = json.extras;
    if (json !== undefined && json !== "") {

    } else {
        return false;
    }

    window.console.log(data, w, h);

    for (var i = 0; i < h; i++) {
        row = tiles[i];
        eRow = extras[i];
        window.console.log(tiles, extras);

        for (var k = 0; k < w; k++) {
            var rowGroup = new Kinetic.Group({
                y: i*data.blocksize
            });


            var rowItems = row[k];
            var rowExtras = eRow[k];

            var asset = Registry.cachedImages["assets/tiles/bg/"+ rowItems + ".png"];
            var extra = Registry.cachedImages["assets/tiles/items/"+rowExtras + ".png"];

            var tile = new Kinetic.Image({
                image: asset,
                width:data.blocksize,
                height:data.blocksize,
                x:k*data.blocksize
            });

            var extraTile = new Kinetic.Image({
                image: extra,
                width:data.blocksize,
                height:data.blocksize,
                x:k*data.blocksize
            });

            window.console.log(extra, rowExtras);
            rowGroup.add(tile);
            rowGroup.add(extraTile);

            extraTile.moveToTop();

            Registry.layer.add(rowGroup);
        }
    }

    Registry.stage.draw();

}