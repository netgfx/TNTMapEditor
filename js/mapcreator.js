
function mapCreator() {

    var $this = this;
    this.amountOfBlockX = 20;
    this.amountOfBlockY = 12;
    this.blockSize = 64;
    this.currentMap = Registry.currentMap;


    this.createMapTiles = function() {
        var bgGroup = new Kinetic.Group();
        for(var i=0;i<this.amountOfBlockY;i++){
            for(var j=0; j < this.amountOfBlockX; j++){

                var img = Registry.cachedImages["assets/tiles/bg/"+this.currentMap[i][j]+".png"];
                var bgTile = new Kinetic.Image({
                    image:img,
                    width:this.blockSize,
                    height:this.blockSize,
                    x:this.blockSize * j,
                    y:this.blockSize * i
                });

                bgGroup.add(bgTile);
            }
        }

        Registry.mainLayer.add(bgGroup);
        Registry.mainLayer.draw();
    };

    return this;
};