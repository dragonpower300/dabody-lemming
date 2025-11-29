scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    info.changeScoreBy(1)
})
game.splash("pak de chocopotten, koop wapens en vecht.")
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(assets.image`lemming`, SpriteKind.Player)
controller.moveSprite(mySprite)
info.setScore(0)
scene.cameraFollowSprite(mySprite)
