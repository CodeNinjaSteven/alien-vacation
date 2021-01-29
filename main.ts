sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite, otherSprite) {
    game.over (false)
})
sprites.onDestroyed(SpriteKind.Enemy, function(sprite) {
    info.changeScoreBy(1)
})

let timeInterval = 1000

let ship = sprites.create(img`
    ........feebbbef........
    ........f24bdb2e........
    .......ce2222222e.......
    ......cbc22bb22e6cf.....
    ......b962e99e2b6dc.....
    ......c6b2e69e2e6bf.....
    ...cccee222ab222eeeccc..
    .fbbbddddb4eeebbbbbbbbcf
    febbddbcdddbbdddbcbbbbbf
    fe2bddcbdddcbddddccbb42f
    .f24bddddddbbdddbbbb42f.
    ..ff24bddddddddbbbb22f..
    ....fee244bbbb4444ee....
    .....fbbe2222e22ebbf....
    ......ffffbbbbfffff.....
    ..........fffff.........
`, SpriteKind.Player)
ship.setPosition(20, 60)
controller.moveSprite(ship, 0, 100)
ship.setFlag(SpriteFlag.StayInScreen, true)
info.setScore(0)

game.onUpdateInterval(timeInterval, function() {
    let rock = sprites.create(img`
        . . . . . . . . c c c c . . . .
        . . . . c c c c c c c c c . . .
        . . . c f c c a a a a c a c . .
        . . c c f f f f a a a c a a c .
        . . c c a f f c a a f f f a a c
        . . c c a a a a b c f f f a a c
        . c c c c a c c b a f c a a c c
        c a f f c c c a b b 6 b b b c c
        c a f f f f c c c 6 b b b a a c
        c a a c f f c a 6 6 b b b a a c
        c c b a a a a b 6 b b a b b a .
        . c c b b b b b b b a c c b a .
        . . c c c b c c c b a a b c . .
        . . . . c b a c c b b b c . . .
        . . . . c b b a a 6 b c . . . .
        . . . . . . b 6 6 c c . . . . .
    `, SpriteKind.Enemy)
rock.setPosition(160, randint(0, 120))
rock.vx = -40
rock.setFlag(SpriteFlag.AutoDestroy, true)
let score = info.score()
if(score <= 10) {
    timeInterval = 1000
    controller.moveSprite(ship, 0, 100)
    rock.vx = -40
} else if (score > 10 && score <= 20) {
    timeInterval = 800
    controller.moveSprite(ship, 0, 150)
    rock.vx = -60
} else if (score > 20 && score <= 30) {
    timeInterval = 300
    controller.moveSprite(ship, 0, 200)
    rock.vx = -80 
} else if (score > 30 && score <= 40) {
    timeInterval = 200
    controller.moveSprite(ship, 0, 250)
    rock.vx = -100
}  else if (score > 40 && score <= 50) {
    timeInterval = 100
    controller.moveSprite(ship, 0, 300)
    rock.vx = -120
} else {
    timeInterval = 50
    controller.moveSprite(ship, 0, 350)
    rock.vx = -140
}
})