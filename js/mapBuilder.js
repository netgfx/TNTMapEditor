var selectedTile = "";
var client;
$(document).ready(function () {


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

    loadAssets(doodleList, makeDoodles);
    loadAssets(assetsList, init);
    createBlocks(64);

    $("#save").bind("click", saveProgress);

    $("#clear").bind("click", clearText);
    $("#loadSample").bind("click", loadSample);

    $("#showTiles").bind("click", showTiles);
    $("#showExtras").bind("click", showExtras);
    $("#loadAssets").bind("click", enableDB);
    $(".rebuildStage").bind("click", rebuildStage);

    $(".modal").on("click", "#importJSON", function () {
        importJSON($("#import-input").val());
    });

    $('#myModal').on('shown.bs.modal', function (e) {
        $('#saveExport').zclip({
            path: 'ZeroClipboard.swf',
            copy: function () {
                return onSaveToClipboard();
            },
            afterCopy: function () {
                $('#saveExport').zclip('remove'); /*remove zclip*/
            }
        });
    });

});

/**
 * [rebuildStage description]
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */

function rebuildStage(e) {

}

/**
 * [onSaveToClipboard description]
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */

function onSaveToClipboard(e) {
    window.console.log($("#results").val());
    return $("#results").val();
}

/**
 * [enableDB description]
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */

function enableDB(e) {
    options = {

        // Required. Called when a user selects an item in the Chooser.
        success: function (files) {
            alert("Here's the file link: " + files[0].link);
            window.console.log(files);
        },

        // Optional. Called when the user closes the dialog without selecting a file
        // and does not include any parameters.
        cancel: function () {

        },

        // Optional. "preview" (default) is a preview link to the document for sharing,
        // "direct" is an expiring link to download the contents of the file. For more
        // information about link types, see Link types below.
        linkType: "direct", // or "direct"

        // Optional. A value of false (default) limits selection to a single file, while
        // true enables multiple file selection.
        multiselect: true, // or true

        // Optional. This is a list of file extensions. If specified, the user will
        // only be able to select files with these extensions. You may also specify
        // file types, such as "video" or "images" in the list. For more information,
        // see File types below. By default, all extensions are allowed.
        extensions: ['images']
    };

    Dropbox.choose(options);
}

/**
 * [init description]
 * @return {[type]} [description]
 */

function init(assets) {
    window.console.log(assets);

    for (var i = 0; i < assets.length; i++) {
        var uid = _.uniqueId("tile_");
        $("#sidePanel").append("<div class='imageBlocks'><img id='" + uid + "' src='" + assets[i] + "'/></div>");
        $(".imageBlocks>img").draggable({
            cursor: "move",
            revert: true,
            grid: [1, 1],
            helper: "clone",
            appendTo: "body"
        });

    }

    $(".imageBlocks>img").on("click", onSelectTile);
}

function makeDoodles(assets) {
    for (var i = 0; i < assets.length; i++) {
        var uid = _.uniqueId("item_");
        $("#sidePanel2").append("<div class='imageBlocks'><img class='extras' id='" + uid + "' src='" + assets[i] + "'/></div>");
        $(".imageBlocks>img").draggable({
            cursor: "move",
            revert: true,
            grid: [1, 1],
            helper: "clone",
            appendTo: "body"
        });

    }

    $(".imageBlocks>img").on("click", onSelectTile);
}

function showTiles() {
    $("#mapOverlay").hide(300);
    $("#sidePanel2").hide(300, function () {
        $("#sidePanel").show(300);
    });
}

function showExtras() {
    $("#sidePanel").hide(300, function () {
        $("#sidePanel2").show(300);
        $("#mapOverlay").show(300);
    });
}

function onSelectTile(e) {
    window.console.log(e, e.currentTarget);
    selectedTile = e.currentTarget;
    selectedTile = $(selectedTile).clone().attr("id", "selectedTile");
    $("#tile-preview").empty();
    $("#tile-preview").append(selectedTile[0]);
}

function createBlocks(blockSize) {
    var w = blockSize * 20;
    var h = blockSize * 12;

    for (var i = 0; i < 12; i++) {
        for (var j = 0; j < 20; j++) {

            $("#map").append("<div class='block' id='block_" + i + "_" + j + "' style='left:" + (j * (blockSize + 1)) + "px;top:" + (i * (blockSize + 1)) + "px;'></div>");

            $("#mapOverlay").append("<div class='blockExtras' id='extras_" + i + "_" + j + "' style='left:" + (j * (blockSize + 1)) + "px;top:" + (i * (blockSize + 1)) + "px;'></div>");
        }
    }

    $(".block").on("click", addTile);
    $(".blockExtras").on("click", addTile);

    $(".block").droppable({
        accept: function (ui) {

            return true;

        },
        tolerance: "pointer",
        drop: function (event, ui) {
            window.console.log("dropped", ui, $(this));
            var imgType = String($(ui.helper[0]).attr("src")).split("/");
            imgType = imgType[imgType.length - 1];
            imgType = String(imgType).replace(".png", "");
            var UID = _.uniqueId("map_");
            var clone = $(ui.helper[0]).clone().css({
                'left': 0,
                'top': 0
            }).attr("id", UID).attr("rel", imgType).addClass("tile");

            $(this).empty().append(clone);
        }
    });
}

function addTile(e) {
    var item = $(selectedTile).clone();

    var imgType = String($(selectedTile).attr("src")).split("/");
    imgType = imgType[imgType.length - 1];
    imgType = String(imgType).replace(".png", "");
    var UID = _.uniqueId("map_");
    $(item).attr("id", UID).attr("rel", imgType).addClass("tile");

    $(e.currentTarget).empty().append(item);

}

function clearText(e) {
    $("#results").val("");
}

function clearTiles() {
    $(".tile").remove();
}

function loadSample(e) {

    if (Registry.currentMap !== undefined) {
        window.console.log("loading sample map...", Registry.currentMap);

        //var map = JSON.parse(Registry.currentMap);
        importJSON(Registry.currentMap);

    }
}

function saveProgress(e) {

    $(e.currentTarget).addClass("enabled");

    var numChildren = $(".block").length;
    var blocks = $("#map").children();
    var extrasBlock = $("#mapOverlay").children();
    var storage = {
        "tiles": [],
        "extras": []
    };
    var counter = 0;
    for (var i = 0; i < numChildren; i++) {
        if (counter === 0) {
            storage.tiles.push([]);
            storage.extras.push([]);
        }

        var type = "none";
        if ($(blocks[i]).children().length > 0) {
            type = $(blocks[i]).children(".tile").attr("rel");

        } else {
            type = "none";

        }

        if ($(extrasBlock[i]).children().length > 0) {
            extrasType = $(extrasBlock[i]).children(".tile").attr("rel");
        } else {

            extrasType = "none";
        }
        //window.console.log(i, type, $(blocks[i]).children().length);
        storage.tiles[storage.tiles.length - 1].push(type);
        storage.extras[storage.extras.length - 1].push(extrasType);

        counter += 1;
        if (counter > 19) {
            counter = 0;
        }
    }

    $("#results").val(JSON.stringify(storage));
    //window.console.log(JSON.stringify(storage));

}

function importJSON(json) {

    var tiles;
    var extras;
    if (json !== undefined && json !== "") {
        json = JSON.parse(json);
        tiles = json.tiles;
        extras = json.extras;
    } else {
        return false;
    }

    clearTiles();
    window.console.log(tiles, extras);
    var blockSize = 64;
    var w = blockSize * 20;
    var h = blockSize * 12;
    var row;
    var eRow;
    for (var i = 0; i < 12; i++) {
        row = tiles[i];
        eRow = extras[i];
        for (var j = 0; j < 20; j++) {
            var rowItems = row[j];
            var rowExtras = eRow[j];
            var UID = _.uniqueId("map_");
            var eUID = _.uniqueId("item_");

            if (rowItems === "none") {
                continue;
            }

            var asset = "assets/tiles/bg/" + rowItems + ".png";
            var tag = "<img id='" + UID + "' src='" + asset + "' class='tile' rel='" + rowItems + "'>";
            var block = $("#map").find("#block_" + i + "_" + j);
            block.append(tag);
            //$("#map").append("<div class='block' id='block_" + i + "_" + j + "' style='left:" + (j * (blockSize + 1)) + "px;top:" + (i * (blockSize + 1)) + "px;'>" + tag + "</div>");


            ////////////////////////
            if (rowExtras === "none") {
                continue;
            }

            var extra_asset = "assets/tiles/items/" + rowExtras + ".png";
            var extra = "<img id='" + eUID + "' src='" + extra_asset + "' class='tile' rel='" + rowExtras + "'>";
            var extra_item = $("#mapOverlay").find("#extras_" + i + "_" + j);
            extra_item.append(extra);
            //$("#mapOverlay").append("<div class='blockExtras' id='extras_" + i + "_" + j + "' style='left:" + (j * (blockSize + 1)) + "px;top:" + (i * (blockSize + 1)) + "px;'>"+extra+"</div>");

        }
    }

    $(".block").on("click", addTile);
    $(".blockExtras").on("click", addTile);
}