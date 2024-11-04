namespace SpriteKind {
    export const Enemey2 = SpriteKind.create()
}
let myDart = 0
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 0
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (fire_cooldown == 0) {
        fire_cooldown = 1
        if (direction == 0) {
            projectile = sprites.createProjectileFromSprite(assets.image`up`, PLAYER_SPRITE, 0, -50)
        }
        if (direction == 1) {
            projectile = sprites.createProjectileFromSprite(assets.image`right`, PLAYER_SPRITE, 50, 0)
        }
        if (direction == 2) {
            projectile = sprites.createProjectileFromSprite(assets.image`left`, PLAYER_SPRITE, -50, 0)
        }
        if (direction == 3) {
            projectile = sprites.createProjectileFromSprite(assets.image`down`, PLAYER_SPRITE, 0, 50)
        }
        pause(100)
    }
})
sprites.onOverlap(SpriteKind.Enemey2, SpriteKind.Projectile, function (sprite, otherSprite) {
    statusbarMob2.value = statusbarMob2.value - 2
})
sprites.onOverlap(myDart, SpriteKind.Enemy, function (sprite, otherSprite) {
    pause(300)
    statusbar.value = statusbar.value - 15
    dinoe.follow(PLAYER_SPRITE, 0)
    pause(50)
    dinoe.follow(PLAYER_SPRITE, 30)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 2
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    statusbarMobs.value = statusbarMobs.value - 2
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite2, otherSprite2) {
    pause(200)
    statusbar.value = statusbar.value - 5
    dinoe.follow(PLAYER_SPRITE, 0)
    pause(200)
    dinoe.follow(PLAYER_SPRITE, 30)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 1
})
sprites.onDestroyed(SpriteKind.Enemey2, function (sprite) {
    dino_2_strength = dino_2_strength + 5
    statusbarMob2 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbarMob2.value = dino_2_strength
    dione2 = sprites.create(assets.image`myImage3`, SpriteKind.Enemey2)
    dione2.setPosition(randint(0, 157), randint(0, 120))
    statusbarMob2.setLabel("HP")
    statusbarMob2.attachToSprite(dione2)
    dione2.follow(PLAYER_SPRITE, 10)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 3
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemey2, function (sprite, otherSprite) {
    pause(200)
    statusbar.value = statusbar.value - 5
    dione2.follow(PLAYER_SPRITE, 0)
    pause(200)
    dione2.follow(PLAYER_SPRITE, 30)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    pause(500)
    fire_cooldown = 0
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    dino_1_srength = dino_1_srength + 5
    statusbarMobs = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbarMobs.value = dino_1_srength
    statusbarMobs.setLabel("HP")
    dinoe = sprites.create(assets.image`dino2`, SpriteKind.Enemy)
    dinoe.setPosition(randint(0, 157), randint(0, 120))
    statusbarMobs.attachToSprite(dinoe)
    dinoe.follow(PLAYER_SPRITE, 10)
})
let projectile: Sprite = null
let fire_cooldown = 0
let direction = 0
let dino_1_srength = 0
let dino_2_strength = 0
let dinoe: Sprite = null
let dione2: Sprite = null
let PLAYER_SPRITE: Sprite = null
let statusbar: StatusBarSprite = null
let statusbarMobs: StatusBarSprite = null
let statusbarMob2: StatusBarSprite = null
statusbarMob2 = statusbars.create(10, 4, StatusBarKind.EnemyHealth)
statusbarMobs = statusbars.create(10, 4, StatusBarKind.EnemyHealth)
statusbar = statusbars.create(10, 4, StatusBarKind.Health)
statusbarMobs.setLabel("HP")
statusbarMob2.setLabel("HP")
statusbar.setLabel("HP")
statusbarMob2.value = 200
statusbarMobs.value = 100
statusbar.value = 100
statusbarMobs.max = 100
statusbarMob2.max = 200
statusbar.max = 100
// Rendering section
scene.setBackgroundImage(assets.image`Level1`)
PLAYER_SPRITE = sprites.create(assets.image`Player`, SpriteKind.Player)
dione2 = sprites.create(assets.image`myImage3`, SpriteKind.Enemey2)
dinoe = sprites.create(assets.image`dino2`, SpriteKind.Enemy)
dinoe.setPosition(21, 86)
dione2.setPosition(47, 11)
// Movement
controller.moveSprite(PLAYER_SPRITE, 65, 65)
statusbarMobs.attachToSprite(dinoe)
statusbarMob2.attachToSprite(dione2)
statusbar.attachToSprite(PLAYER_SPRITE)
dinoe.follow(PLAYER_SPRITE, 10)
dione2.follow(PLAYER_SPRITE, 10)
dino_2_strength = 50
dino_1_srength = 50
game.onUpdate(function () {
    characterAnimations.runFrames(
    dinoe,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c 5 5 5 5 c c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c 5 5 5 f 1 5 5 5 5 5 c 
        . . . c 5 5 5 5 f f 5 5 5 5 5 c 
        . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
        . . c d 5 5 5 5 5 5 b 1 b b c c 
        . . c d d d 5 5 5 5 5 3 3 3 5 c 
        . . c d d d 5 5 5 5 5 5 5 5 b . 
        . c c d d d d b 5 5 c b b c . . 
        c d c d d d d b b 5 5 c b b c . 
        c d d d d d d d d c c c c c c . 
        . c d d d b 5 5 d c c c c . . . 
        . . c c c b 5 5 b c c c c c . . 
        . . . . c b 5 5 d c b b b c . . 
        `,img`
        . . . . . . . c c c c c . . . . 
        . . . . . . c 5 5 5 5 5 c c . . 
        . . . . . c 5 5 f 1 5 5 5 5 c . 
        . . . . c 5 5 5 f f 5 5 5 5 5 c 
        . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
        . . . c 5 5 5 5 5 5 b 1 b b c c 
        . . c d 5 5 5 5 5 5 5 3 3 3 5 c 
        . . c d d d 5 5 5 5 5 3 3 3 5 c 
        . . c d d d 5 5 5 b 5 5 5 5 c . 
        . . c d d d d b 5 5 c b b c . . 
        c c c d d d d b b 5 5 c b b c . 
        c d d d d d d d d c c c c c c . 
        . c d d d b 5 5 b c c c . . . . 
        . . c c c b b 5 5 d c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . . . . c b b b c . . . . 
        `,img`
        . . . . . . . c c c c c . . . . 
        . . . . . . c 5 5 5 5 5 c c . . 
        . . . . . c 5 5 f 1 5 5 5 5 c . 
        . . . . c 5 5 5 f f 5 5 5 5 5 c 
        . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
        . . . c 5 5 5 5 5 5 b 1 b b c c 
        . . c d 5 5 5 5 5 5 5 3 3 3 5 c 
        . . c d d d 5 5 5 5 5 5 5 5 5 c 
        . . c d d d 5 5 5 b 5 5 5 5 c . 
        . . c d d d d b 5 5 c b b c . . 
        c c c d d d d b b 5 5 c b b c . 
        c d d d d d d d d c c c c c c . 
        . c c d d d b 5 5 b c c . . . . 
        . . . c c c b b 5 5 d c . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . . . . c b b b c . . . . 
        `,img`
        . . . . . . . c c c c c . . . . 
        . . . . . . c 5 5 5 5 5 c c . . 
        . . . . . c 5 5 f 1 5 5 5 5 c . 
        . . . . c 5 5 5 f f 5 5 5 5 5 c 
        . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
        . . . c 5 5 5 5 5 5 b 1 b b c c 
        . . c d 5 5 5 5 5 5 5 3 3 3 5 c 
        . . c d d d 5 5 5 5 5 5 5 5 5 c 
        . . c d d d 5 5 5 b 5 5 5 5 c . 
        . . c d d d d b 5 5 c b b c . . 
        . c c d d d d b b 5 5 c b b c . 
        c c d d d d d d b b c c c c c . 
        c d d d d d 5 5 b 5 5 c c . . . 
        c c c c c c b b 5 5 b c . . . . 
        . . . . . . c c c c c c . . . . 
        . . . . . . c b b b c . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c 5 5 5 5 c c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c 5 5 5 f 1 5 5 5 5 5 c 
        . . . c 5 5 5 5 f f 5 5 5 5 5 c 
        . . . c 5 5 5 5 5 5 b 1 b b c c 
        . . c d 5 5 5 5 5 5 b b 3 3 c c 
        . . c d d d 5 5 5 5 5 3 3 3 5 c 
        . . c d d d 5 5 5 5 5 5 5 5 b . 
        . . c d d d d b 5 5 c b b c . . 
        c c c d d d d b b 5 5 c b b c . 
        c d d d d d d d d c c c c c c . 
        c c d d d b 5 5 d c c c c . . . 
        . . c c c b 5 5 b c c b c . . . 
        . . . . . c b 5 5 d c c c . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c 5 5 5 5 c c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c 5 5 5 f 1 5 5 5 5 5 c 
        . . . c 5 5 5 5 f f 5 5 5 5 5 c 
        . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
        . . c d 5 5 5 5 5 5 b 1 b b c c 
        . . c d d d 5 5 5 5 5 3 3 3 5 c 
        . . c d d d 5 5 5 5 5 5 5 5 b . 
        . . c d d d d b 5 5 c b b c . . 
        c c c d d d d b b 5 5 c b b c . 
        c d d d d d d d d c c c c c c . 
        . c c d d b 5 5 d c c c c . . . 
        . . . c c b 5 5 c c c b b c . . 
        . . . . . c 5 5 d c c c c c . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.runFrames(
    dinoe,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c 5 5 5 5 c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        c 5 5 5 5 5 1 f 5 5 5 c . . . . 
        c 5 5 5 5 5 f f 5 5 5 5 c . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . b 5 5 5 5 5 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c c . 
        . c b b c 5 5 b b d d d d c d c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d d c . 
        . . c c c c c b 5 5 b c c c . . 
        . . c b b b c d 5 5 b c . . . . 
        `,img`
        . . . . c c c c c . . . . . . . 
        . . c c 5 5 5 5 5 c . . . . . . 
        . c 5 5 5 5 1 f 5 5 c . . . . . 
        c 5 5 5 5 5 f f 5 5 5 c . . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 c . . . 
        c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . c 5 5 5 5 b 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . . c c c b 5 5 b d d d c . 
        . . . . . c d 5 5 b b c c c . . 
        . . . . c c c c c c c . . . . . 
        . . . . c b b b c . . . . . . . 
        `,img`
        . . . . c c c c c . . . . . . . 
        . . c c 5 5 5 5 5 c . . . . . . 
        . c 5 5 5 5 1 f 5 5 c . . . . . 
        c 5 5 5 5 5 f f 5 5 5 c . . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 c . . . 
        c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
        c 5 5 5 5 5 5 5 5 5 d d d c . . 
        . c 5 5 5 5 b 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . . c c b 5 5 b d d d c c . 
        . . . . c d 5 5 b b c c c . . . 
        . . . . c c c c c c c . . . . . 
        . . . . c b b b c . . . . . . . 
        `,img`
        . . . . c c c c c . . . . . . . 
        . . c c 5 5 5 5 5 c . . . . . . 
        . c 5 5 5 5 1 f 5 5 c . . . . . 
        c 5 5 5 5 5 f f 5 5 5 c . . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 c . . . 
        c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
        c 5 5 5 5 5 5 5 5 5 d d d c . . 
        . c 5 5 5 5 b 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c . 
        . c c c c c b b d d d d d d c c 
        . . . c c 5 5 b 5 5 d d d d d c 
        . . . . c b 5 5 b b c c c c c c 
        . . . . c c c c c c . . . . . . 
        . . . . . c b b b c . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c 5 5 5 5 c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        c 5 5 5 5 5 1 f 5 5 5 c . . . . 
        c 5 5 5 5 5 f f 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 c . . . 
        c c 3 3 b b 5 5 5 5 5 5 d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . b 5 5 5 5 5 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d d c c 
        . . . c b c c b 5 5 b c c c . . 
        . . . c c c d 5 5 b c . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c 5 5 5 5 c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        c 5 5 5 5 5 1 f 5 5 5 c . . . . 
        c 5 5 5 5 5 f f 5 5 5 5 c . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . b 5 5 5 5 5 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d c c . 
        . . c b b c c c 5 5 b c c . . . 
        . . c c c c c d 5 5 c . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
})
game.onUpdate(function () {
    characterAnimations.runFrames(
    dione2,
    assets.animation`myAnim2`,
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.runFrames(
    dione2,
    assets.animation`duck1`,
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
})
game.onUpdate(function () {
    characterAnimations.loopFrames(
    PLAYER_SPRITE,
    assets.animation`myAnim`,
    100,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    PLAYER_SPRITE,
    assets.animation`Walkingforward`,
    200,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    PLAYER_SPRITE,
    assets.animation`myAnim3ee`,
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    PLAYER_SPRITE,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingRight)
    )
    // If you reach 0 hp
    if (statusbar.value == 0) {
        game.gameOver(false)
        game.setGameOverMessage(true, "GAME OVER!")
    }
    // If you reach 0 hp
    if (statusbarMobs.value == 0) {
        sprites.destroy(statusbarMobs, effects.fire, 500)
        sprites.destroy(dinoe, effects.fire, 500)
    }
    // If you reach 0 hp
    if (statusbarMob2.value == 0) {
        sprites.destroy(statusbarMob2, effects.fire, 500)
        sprites.destroy(dione2, effects.fire, 500)
    }
})
forever(function () {
    music.play(music.createSong(hex`003c000408050101001c000f05001202c102c20100040500280000006400280003140006020004020100000400012004000600011b06000800011b08000a0001190a000c00011b0e000f00012010001200012012001400012414001600012516001800012724002800012728002a0001272a002c0001292c002e00012a2e003000012c3e004000012c40004200012c42004400012c44004600012946004800012a4a004c0001294c004e0001275c006000012760006400012565006600012566006700012767006800012972007600012776007800012578007a0001247a007c0001247d007e0001247e007f0001257f008000012788008c0001258c008e0001248e00900001229000920001229300940001229400950001249500960001259a009b0001299d009e000127`), music.PlaybackMode.UntilDone)
    music.play(music.createSong(hex`00f0000408010101001c000f05001202c102c20100040500280000006400280003140006020004240000000400011b04000800011b08000c00011b14001800011b18001c00011b1c002000011b`), music.PlaybackMode.UntilDone)
    music.play(music.createSong(hex`00f0000408010101001c000f05001202c102c201000405002800000064002800031400060200041e0000000400011b04000800011b08000c00011b18001c00011b1c002000011b`), music.PlaybackMode.UntilDone)
    music.play(music.createSong(hex`003c000408050200001c00010a006400f401640000040000000000000000000000000005000004060040004800012c01001c000f05001202c102c20100040500280000006400280003140006020004ea0000000400012004000600011b06000800011b08000a0001190a000c00011b0e000f00012010001200012012001400012414001600012516001800012724002800012728002a0001272a002c0001292c002e00012a2e003000012c40004800012c48005000012a5000580001275c006000012760006400012565006600012566006700012767006800012972007600012776007800012578007a0001247a007c0001247d007e0001247e007f0001257f008000012788008c0001258c008e0001248e00900001229000920001229300940001229400950001249500960001259c009e0001299e00a0000127`), music.PlaybackMode.UntilDone)
    music.play(music.createSong(hex`00f0000408010101001c000f05001202c102c20100040500280000006400280003140006020004240000000400011b04000800011b08000c00011b14001800011b18001c00011b1c002000011b`), music.PlaybackMode.UntilDone)
    music.play(music.createSong(hex`00f0000408010101001c000f05001202c102c201000405002800000064002800031400060200041e0000000400011b04000800011b08000c00011b18001c00011b1c002000011b`), music.PlaybackMode.UntilDone)
})
