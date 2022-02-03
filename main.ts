namespace SpriteKind {
    export const medkit = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.medkit, function (sprite, otherSprite) {
    if (info.score() >= 5) {
        if (controller.A.isPressed()) {
            info.changeLifeBy(1)
            info.changeScoreBy(-5)
            pause(2000)
        }
    }
    if (info.score() >= 30) {
        if (controller.B.isPressed()) {
            info.changeScoreBy(-30)
            pause(2000)
            duo = sprites.create(img`
                . . . . . a a a a a a . . . . . 
                . . . a a 9 9 9 9 9 9 a a . . . 
                . . a a 9 9 9 9 9 9 9 9 a a . . 
                . a a 9 a 9 9 9 9 9 9 9 9 a a . 
                . a 9 a 9 9 9 9 9 1 1 1 9 9 a . 
                a 9 a a 9 9 9 9 9 1 1 1 9 9 9 a 
                a 9 a 9 9 9 9 9 9 1 1 1 9 9 9 a 
                a 9 f 9 9 9 9 9 9 9 1 1 1 9 9 a 
                a 5 f a 9 9 9 9 9 9 1 1 1 9 9 a 
                a 5 f f 9 9 9 9 9 9 9 9 9 a 9 a 
                a 5 a f f 9 9 9 9 9 9 9 a a 9 a 
                . a 5 f f f a 9 9 9 9 a a 5 a . 
                . a a 5 f f f f f f f a 5 a a . 
                . . a a 5 a f f f f 5 5 a a . . 
                . . . a a 5 5 5 5 5 5 a a . . . 
                . . . . . a a a a a a . . . . . 
                `, SpriteKind.Projectile)
            duo.setBounceOnWall(true)
            duo.setVelocity(50, 50)
            duo.setBounceOnWall(true)
            duo.setPosition(randint(0, 160), randint(0, 120))
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    duo.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    score_pts.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    mono.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    music.playTone(494, music.beat(BeatFraction.Eighth))
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    mono.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    score_pts.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    music.playTone(147, music.beat(BeatFraction.Sixteenth))
    music.playTone(131, music.beat(BeatFraction.Half))
})
let duo: Sprite = null
let score_pts: Sprite = null
let mono: Sprite = null
effects.starField.startScreenEffect()
mono = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . 3 1 1 3 . . . . . . 
    . . . . . 2 1 2 2 1 2 . . . . . 
    . . . . . 2 1 2 2 1 2 . . . . . 
    . . . . . . 3 1 1 3 . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
mono.setVelocity(50, 50)
mono.setBounceOnWall(true)
let mySprite2 = sprites.create(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 
    1 1 1 2 2 2 2 2 2 2 2 2 2 1 1 1 
    1 1 1 2 2 2 2 2 2 2 2 2 2 1 1 1 
    1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `, SpriteKind.medkit)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 5 5 6 6 6 . . . . 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setBounceOnWall(true)
controller.moveSprite(mySprite)
score_pts = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 4 4 . . . . . . . 
    . . . . . . 4 5 5 4 . . . . . . 
    . . . . . . 2 3 3 2 . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
score_pts.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
mono.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
info.setLife(4)
let score = 0
scene.setBackgroundColor(10)
