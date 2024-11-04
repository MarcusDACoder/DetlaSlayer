myDart = 0

def on_a_pressed():
    if characterAnimations.matches_rule(PLAYER_SPRITE,
        characterAnimations.rule(Predicate.FACING_RIGHT)):
        pass
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap(sprite, otherSprite):
    pause(300)
    statusbar.value = statusbar.value - 15
    dinoe.follow(PLAYER_SPRITE, 0)
    pause(50)
    dinoe.follow(PLAYER_SPRITE, 30)
sprites.on_overlap(myDart, SpriteKind.enemy, on_on_overlap)

def on_on_overlap2(sprite2, otherSprite2):
    pause(300)
    statusbar.value = statusbar.value - 5
    dinoe.follow(PLAYER_SPRITE, 0)
    pause(50)
    dinoe.follow(PLAYER_SPRITE, 30)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap2)

dinoe: Sprite = None
PLAYER_SPRITE: Sprite = None
statusbar: StatusBarSprite = None
statusbarMobs = statusbars.create(10, 4, StatusBarKind.enemy_health)
statusbar = statusbars.create(10, 4, StatusBarKind.health)
statusbarMobs.set_label("HP")
statusbar.set_label("HP")
statusbarMobs.value = 100
statusbar.value = 100
statusbarMobs.max = 100
statusbar.max = 100
# Rendering section
scene.set_background_image(assets.image("""
    Level1
"""))
PLAYER_SPRITE = sprites.create(assets.image("""
    Player
"""), SpriteKind.player)
dinoe = sprites.create(assets.image("""
    dino
"""), SpriteKind.enemy)
dinoe.set_position(21, 86)
# Movement
controller.move_sprite(PLAYER_SPRITE, 65, 65)
statusbarMobs.attach_to_sprite(dinoe)
statusbar.attach_to_sprite(PLAYER_SPRITE)
dinoe.follow(PLAYER_SPRITE, 0)
playerShootright = darts.create(assets.image("""
    downrar
"""), SpriteKind.projectile)
playerShootleft = darts.create(assets.image("""
    left
"""), SpriteKind.projectile)
playerShootDown = darts.create(assets.image("""
    downrar
"""), SpriteKind.projectile)
playerShootUp = darts.create(assets.image("""
    downrar
"""), SpriteKind.projectile)

def on_on_update():
    characterAnimations.run_frames(PLAYER_SPRITE,
        assets.animation("""
            myAnim
        """),
        200,
        characterAnimations.rule(Predicate.MOVING_DOWN))
    characterAnimations.run_frames(PLAYER_SPRITE,
        assets.animation("""
            Walkingforward
        """),
        200,
        characterAnimations.rule(Predicate.MOVING_UP))
    characterAnimations.run_frames(PLAYER_SPRITE,
        assets.animation("""
            myAnim3
        """),
        200,
        characterAnimations.rule(Predicate.MOVING_RIGHT))
    characterAnimations.run_frames(PLAYER_SPRITE,
        assets.animation("""
            myAnim1
        """),
        200,
        characterAnimations.rule(Predicate.MOVING_LEFT))
    # If you reach 0 hp
    if statusbar.value == 0:
        game.game_over(False)
        game.set_game_over_message(True, "GAME OVER!")
game.on_update(on_on_update)

def on_on_update2():
    characterAnimations.run_frames(dinoe,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        characterAnimations.rule(Predicate.MOVING_RIGHT))
    characterAnimations.run_frames(dinoe,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        characterAnimations.rule(Predicate.MOVING_LEFT))
game.on_update(on_on_update2)
