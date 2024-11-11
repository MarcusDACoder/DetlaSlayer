namespace SpriteKind {
    export const Enemey2 = SpriteKind.create()
    export const warning = SpriteKind.create()
    export const meteor = SpriteKind.create()
    export const invisible = SpriteKind.create()
    export const StartScreen = SpriteKind.create()
    export const Sword = SpriteKind.create()
}
let myDart = 0
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 0
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mamaAva == 0) {
        if (fireball_avadibility == 0) {
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
                mana.value += -20
                pause(100)
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Enemey2, SpriteKind.Projectile, function (sprite, otherSprite) {
    statusbarMob2.value = statusbarMob2.value - 2
})
function summon_dino_1 () {
    dino_1_srength = dino_1_srength + 5
    statusbarMobs = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbarMobs.value = dino_1_srength
    statusbarMobs.setLabel("HP")
    dinoe = sprites.create(assets.image`dino2`, SpriteKind.Enemy)
    dinoe.setPosition(randint(0, 157), randint(0, 120))
    statusbarMobs.attachToSprite(dinoe)
    dinoe.follow(PLAYER_SPRITE, 10)
    dinoe.setBounceOnWall(true)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(swinging_sword)) {
        swinging_sword = true
        sword.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . e . e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . . e e e e . e e e e . . . 
            . . . e e e e e . e e . e . . . 
            . . e e e . e e . e . e e e . . 
            . e . e e . e . . e . e e e . . 
            . e e . e . e . . e . e . e . . 
            e . e . e . e . e . . e . e . . 
            e . e . e e e . e . e e . e . . 
            . e . e . e e e e e e . e e . . 
            . e e . e . e e e e e e e . . . 
            . . . e e e . . e . e e e . . . 
            . . . . . e e e e e e e . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        pause(200)
        sword.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        swinging_sword = false
    }
    pause(50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.meteor, function (sprite, otherSprite) {
    statusbar.value += -5
    pause(500)
})
sprites.onOverlap(SpriteKind.meteor, SpriteKind.warning, function (sprite, otherSprite) {
    sprites.destroy(bigrock)
    sprites.destroy(shadow)
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
function summon_dino_2 () {
    dino_2_strength = dino_2_strength + 5
    statusbarMob2 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbarMob2.value = dino_2_strength
    dione2 = sprites.create(assets.image`myImage3`, SpriteKind.Enemey2)
    dione2.setPosition(randint(0, 157), randint(0, 120))
    statusbarMob2.setLabel("HP")
    statusbarMob2.attachToSprite(dione2)
    dione2.follow(PLAYER_SPRITE, 10)
    dione2.setBounceOnWall(true)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 1
})
function dino2_stomp () {
    dione2.follow(PLAYER_SPRITE, 0)
    dione2.setVelocity(0, 0)
    pause(1000)
    dione2.follow(PLAYER_SPRITE, 10)
}
sprites.onOverlap(SpriteKind.Sword, SpriteKind.Enemey2, function (sprite, otherSprite) {
    statusbarMob2.value += -2
})
sprites.onDestroyed(SpriteKind.Enemey2, function (sprite) {
    summon_dino_2()
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
sprites.onOverlap(SpriteKind.Sword, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbarMobs.value += -2
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    summon_dino_1()
})
let dash: Sprite = null
let shadow: Sprite = null
let bigrock: Sprite = null
let swinging_sword = false
let projectile: Sprite = null
let fire_cooldown = 0
let fireball_avadibility = 0
let mamaAva = 0
let direction = 0
let mana: StatusBarSprite = null
let dino_1_srength = 0
let dino_2_strength = 0
let dinoe: Sprite = null
let dione2: Sprite = null
let PLAYER_SPRITE: Sprite = null
let statusbar: StatusBarSprite = null
let statusbarMobs: StatusBarSprite = null
let statusbarMob2: StatusBarSprite = null
let sword: Sprite = null
sword = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Sword)
let startOn = sprites.create(assets.image`myImage2`, SpriteKind.StartScreen)
let isStart = 1
startOn.sayText("Press \"A\"", 10000000000, false)
music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.LoopingInBackground)
scene.setBackgroundImage(assets.image`myImage4`)
game.showLongText("Press A button to start! Thank you for playing!", DialogLayout.Bottom)
if (controller.A.isPressed() && isStart == 1) {
    isStart = 0
    isStart = 0
    sprites.destroy(startOn, effects.fountain, 500)
    music.stopAllSounds()
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
    scene.setBackgroundImage(assets.image`Level1`)
    PLAYER_SPRITE = sprites.create(assets.image`Player`, SpriteKind.Player)
    dione2 = sprites.create(assets.image`myImage3`, SpriteKind.Enemey2)
    dinoe = sprites.create(assets.image`dino2`, SpriteKind.Enemy)
    dinoe.setBounceOnWall(true)
    PLAYER_SPRITE.setBounceOnWall(true)
    dione2.setBounceOnWall(true)
    dinoe.setPosition(21, 86)
    dione2.setPosition(47, 11)
    // Movement
    controller.moveSprite(PLAYER_SPRITE, 65, 65)
    statusbarMobs.attachToSprite(dinoe)
    statusbarMob2.attachToSprite(dione2)
    statusbar.attachToSprite(PLAYER_SPRITE)
    dinoe.follow(PLAYER_SPRITE, 10)
    dione2.follow(PLAYER_SPRITE, 10)
    dino_2_strength = 200
    dino_1_srength = 100
    statusbarMob2.value = 200
    mana = statusbars.create(20, 4, StatusBarKind.Health)
    mana.setLabel("Mana")
    mana.attachToSprite(PLAYER_SPRITE, 10, 0)
    mana.max = 100
    mana.setColor(8, 9)
    mana.value = 100
}
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
game.onUpdate(function () {
    if (PLAYER_SPRITE.vx < 0) {
        sword.right = PLAYER_SPRITE.left
        sword.y = PLAYER_SPRITE.y
    } else if (PLAYER_SPRITE.vx > 0) {
        sword.left = PLAYER_SPRITE.right
        sword.y = PLAYER_SPRITE.y
    } else if (PLAYER_SPRITE.vy > 0) {
        sword.top = PLAYER_SPRITE.bottom
        sword.x = PLAYER_SPRITE.x
    } else if (PLAYER_SPRITE.vy < 0) {
        sword.bottom = PLAYER_SPRITE.top
        sword.x = PLAYER_SPRITE.x
    }
})
game.onUpdate(function () {
    if (mana.value < 20) {
        mamaAva = 1
    } else {
        mamaAva = 0
    }
})
forever(function () {
    if (isStart == 0) {
        music.play(music.createSong(hex`003c000408050101001c000f05001202c102c20100040500280000006400280003140006020004020100000400012004000600011b06000800011b08000a0001190a000c00011b0e000f00012010001200012012001400012414001600012516001800012724002800012728002a0001272a002c0001292c002e00012a2e003000012c3e004000012c40004200012c42004400012c44004600012946004800012a4a004c0001294c004e0001275c006000012760006400012565006600012566006700012767006800012972007600012776007800012578007a0001247a007c0001247d007e0001247e007f0001257f008000012788008c0001258c008e0001248e00900001229000920001229300940001229400950001249500960001259a009b0001299d009e000127`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00f0000408020101001c000f05001202c102c20100040500280000006400280003140006020004420000000400011b04000800011b08000c00011b14001800011b18001c00011b1c002000011b28002c00011b2c003000011b30003400011b3a003c00011b3c004000011b`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`003c000408050200001c00010a006400f401640000040000000000000000000000000005000004060040004800012c01001c000f05001202c102c20100040500280000006400280003140006020004ea0000000400012004000600011b06000800011b08000a0001190a000c00011b0e000f00012010001200012012001400012414001600012516001800012724002800012728002a0001272a002c0001292c002e00012a2e003000012c40004800012c48005000012a5000580001275c006000012760006400012565006600012566006700012767006800012972007600012776007800012578007a0001247a007c0001247d007e0001247e007f0001257f008000012788008c0001258c008e0001248e00900001229000920001229300940001229400950001249500960001259c009e0001299e00a0000127`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00f0000408020101001c000f05001202c102c20100040500280000006400280003140006020004420000000400011b04000800011b08000c00011b14001800011b18001c00011b1c002000011b28002c00011b2c003000011b30003400011b3a003c00011b3c004000011b`), music.PlaybackMode.UntilDone)
    }
})
forever(function () {
    pause(5000)
    dash = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.invisible)
    dash.follow(PLAYER_SPRITE, 100)
    pause(100)
    dinoe.follow(PLAYER_SPRITE, 0)
    dinoe.setVelocity(dash.vx, dash.vy)
    sprites.destroy(dash)
    pause(1000)
    dinoe.follow(PLAYER_SPRITE, 10)
})
forever(function () {
    if (statusbar.value < 20) {
        fireball_avadibility = 1
    }
})
forever(function () {
    pause(5000)
    dino2_stomp()
    animation.runImageAnimation(
    dione2,
    [img`
        ........................
        ........................
        ...........cc...........
        .........cccc...........
        .....ccccccc...cc.......
        ...cc555555cccccc.......
        ..c5555555555bcc........
        .c555555555555b..cc.....
        c555551ff555555bccc.....
        c55d55ff55555555bcc.....
        c5555555555555555b......
        .cbb31bb55555d555b..c...
        .c5333bb55ddddd55dccc...
        .c533b55ddddddddddbc....
        .c5555ddddb55bdddddccc..
        ..ccccbbbb555bdddddccc..
        ...cdcbc5555bddddddcc...
        ....ccbc55bcdddddddbcccc
        .....cbbccbd55dddddddddc
        .....ccbbbd555ddddddddbc
        ...ccbdcbb555ddbbdddbcc.
        ...cbdddcc55ddbbbbccc...
        ...cccccccbdddbccc......
        ........cd555ddc........
        `,img`
        ........................
        ........................
        ..........ccc...........
        .........cccc...........
        .....ccccccc..ccc.......
        ...cc555555cccccc.......
        ..c5555555555bcc........
        .c555555555555b..cc.....
        c555551ff555555bccc.....
        c55d55ff55555555bc......
        c5555555555555555b......
        .cbb31bb5555dd555b.cc...
        .c5333b555ddddd55dccc...
        .c533b55ddddddddddb.....
        .c5555dddbb55bdddddccc..
        ..ccccbbbb555bdddddccc..
        ...cdcbc5555bddddddcc...
        ....ccbc55bc5ddddddbcccc
        .....cbbcc5555dddddddddc
        .....ccbbb555ddbddddddc.
        .....cdcbc55ddbbbdddcc..
        ...ccdddccddddbcbbcc....
        ...ccccccd555ddccc......
        ........cccccccc........
        `,img`
        ........................
        ..........cc............
        .........ccc............
        .....ccccccc.ccc........
        ...cc555555ccccc........
        ..c5555555555bcc........
        .c55551ff55555b.ccc.....
        c55555ff5555555bccc.....
        c55d555555555555bc......
        c55555bb555555555b.c....
        .cbb31b5555ddd555bcc....
        .c5333b555ddddd55dcc....
        .c533b55ddddddd5ddc.....
        ..c555dbbb555bddddb.c...
        ...cccb55555bbdddddcc...
        ....ccb555ccdddddddcc...
        ..ccccbcccbddddddddcc...
        ..c55cbbbbd55dddddddbcc.
        ...c5ccbbd555dddddddddcc
        ....cccbb555ddbbbddddddc
        ......ccb55ddbbbbddddcc.
        ....ccddcbdddbbbbbccc...
        ....ccccd555ddccccc.....
        ........cccccc..........
        `,img`
        ........................
        ..........cc............
        .........ccc............
        .....ccccccc.ccc........
        ...cc555555ccccc........
        ..c5555555555bcc........
        .c55551ff55555b.ccc.....
        c55555ff5555555bccc.....
        c55d555555555555bc......
        c55555bb555555555b.c....
        .cbb31b5555ddd555bcc....
        .c5333b555ddddd55dcc....
        .c533b55ddddddd5ddc.....
        ..c555dbbb555bddddb.c...
        ...cccb55555bbdddddcc...
        ....ccb555ccdddddddcc...
        ..ccccbcccdddddddddcccc.
        ..c55cbbbd55ddddddddcdc.
        ...c5cccd555ddddddddddc.
        ....cc555d5ddbbbbddddbc.
        ......5555ddbbbbbdddbc..
        ......c5555dbbbbbbccc...
        .......c555cccccccc.....
        ........ccc.............
        `,img`
        ........................
        ..........cc............
        .........ccc............
        .....ccccccc.ccc........
        ...cc555555ccccc........
        ..c5555555555bcc........
        .c55551ff55555b.ccc.....
        c55555ff5555555bccc.....
        c55d555555555555bc......
        c55555bb555555555b.c....
        .cbb31b5555ddd555bcc....
        .c5333b555ddddd55dcc....
        .c533b55ddddddd5ddc.....
        ..c555dbbb555bddddb.c...
        ...cccb555555bdddddcc...
        ....ccb5555ccddddddccc..
        ..ccccbcccbddddddddccdc.
        ..c55cbbbbdddddddddbddc.
        ...c5cbbbd55ddddddddddc.
        ....cccbdd55dbbbbddddbc.
        .....cccd555dbbbbdddbc..
        .....c555dddbbbbbbccc...
        .....c55555dbcccccc.....
        ......c5555cc...........
        `,img`
        ........................
        ..........cc............
        .........ccc............
        .....ccccccc..cc........
        ...cc555555ccccc........
        ..c5555555555bcc........
        .c555555555555b..cc.....
        c555551ff555555bccc.....
        c55d55ff55555555bc......
        c5555555555555555b......
        .cbb31bb5555dd555b.cc...
        .c5333b555ddddd55dccc...
        .c533b55ddddddd5ddcc....
        .c5555ddddb55bddddb.....
        ..ccccbbbbb55bdddddccc..
        ..ccccbc5555bddddddcccc.
        ..c55cbc555cdddddddccdc.
        ...c5cbbcccdddddddddddc.
        ....cccbbbbd55dddddddbc.
        ....cbcbbbd555ddddddbcc.
        .....cccbb555dbbbddccc..
        .......cc555dbbbbbcc....
        .......cbddddbcccc......
        ......cd5555dc..........
        `],
    200,
    false
    )
    shadow = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.warning)
    shadow.setPosition(PLAYER_SPRITE.x, PLAYER_SPRITE.y)
    pause(500)
    bigrock = sprites.create(img`
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . 2 2 2 2 2 2 
        . . . . . . . . . . 2 2 2 2 2 2 
        . . e e e e e e e e e e e e 2 2 
        . . e 5 5 e e e e e e e e e 2 2 
        . . e 5 5 e e e e e e 5 5 e . . 
        . . e 5 5 e 5 5 5 e e e e e . 2 
        . . e e e e 5 5 5 e e e e e . 2 
        . . e e e e e e e e e e e e . . 
        . . e e e e e e e 5 5 5 e e 2 2 
        . . e e 5 5 e e e 5 5 5 e e 2 2 
        . . e e 5 5 e e e 5 5 5 e e . . 
        . . e e e e e e e e e e e e . . 
        . . e e e e e e e e e e e e . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.meteor)
    bigrock.setPosition(shadow.x, 0)
    bigrock.setVelocity(0, 50)
    pause(3500)
})
