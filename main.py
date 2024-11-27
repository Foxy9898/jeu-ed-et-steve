def on_player4_connected():
    global p4
    mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.FOUR),
        sprites.create(img("""
                . . . . . . . c c c . . . . . . 
                        . . . . . . c b 5 c . . . . . . 
                        . . . . c c c 5 5 c c c . . . . 
                        . . c c b c 5 5 5 5 c c c c . . 
                        . c b b 5 b 5 5 5 5 b 5 b b c . 
                        . c b 5 5 b b 5 5 b b 5 5 b c . 
                        . . f 5 5 5 b b b b 5 5 5 c . . 
                        . . f f 5 5 5 5 5 5 5 5 f f . . 
                        . . f f f b f e e f b f f f . . 
                        . . f f f 1 f b b f 1 f f f . . 
                        . . . f f b b b b b b f f . . . 
                        . . . e e f e e e e f e e . . . 
                        . . e b c b 5 b b 5 b f b e . . 
                        . . e e f 5 5 5 5 5 5 f e e . . 
                        . . . . c b 5 5 5 5 b c . . . . 
                        . . . . . f f f f f f . . . . .
            """),
            SpriteKind.player))
    p4 = mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.FOUR))
    controller.player4.move_sprite(p4, 100, 100)
    p4.set_position(136, 40)
controller.player4.on_event(ControllerEvent.CONNECTED, on_player4_connected)

def on_player3_connected():
    global p3
    mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.THREE),
        sprites.create(img("""
                . . . . . . 5 . 5 . . . . . . . 
                        . . . . . f 5 5 5 f f . . . . . 
                        . . . . f 1 5 2 5 1 6 f . . . . 
                        . . . f 1 6 6 6 6 6 1 6 f . . . 
                        . . . f 6 6 f f f f 6 1 f . . . 
                        . . . f 6 f f d d f f 6 f . . . 
                        . . f 6 f d f d d f d f 6 f . . 
                        . . f 6 f d 3 d d 3 d f 6 f . . 
                        . . f 6 6 f d d d d f 6 6 f . . 
                        . f 6 6 f 3 f f f f 3 f 6 6 f . 
                        . . f f d 3 5 3 3 5 3 d f f . . 
                        . . f d d f 3 5 5 3 f d d f . . 
                        . . . f f 3 3 3 3 3 3 f f . . . 
                        . . . f 3 3 5 3 3 5 3 3 f . . . 
                        . . . f f f f f f f f f f . . . 
                        . . . . . f f . . f f . . . . .
            """),
            SpriteKind.player))
    p3 = mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.THREE))
    controller.player3.move_sprite(p3, 100, 100)
    p3.set_position(28, 91)
controller.player3.on_event(ControllerEvent.CONNECTED, on_player3_connected)

def on_player2_connected():
    global p2
    mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.TWO),
        sprites.create(img("""
                ........................
                        ........................
                        ........................
                        ........................
                        ..........ffff..........
                        ........ff1111ff........
                        .......fb111111bf.......
                        .......f11111111f.......
                        ......fd11111111df......
                        ......fd11111111df......
                        ......fddd1111dddf......
                        ......fbdbfddfbdbf......
                        ......fcdcf11fcdcf......
                        .......fb111111ffff.....
                        ......fffcdb1bc111cf....
                        ....fc111cbfbf1b1b1f....
                        ....f1b1b1ffffbfbfbf....
                        ....fbfbfffffff.........
                        .........fffff..........
                        ..........fff...........
                        ........................
                        ........................
                        ........................
                        ........................
            """),
            SpriteKind.player))
    p2 = mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO))
    controller.player2.move_sprite(p2, 100, 100)
    p2.set_position(136, 40)
controller.player2.on_event(ControllerEvent.CONNECTED, on_player2_connected)

def on_player1_button_b_pressed():
    global bullet
    bullet = sprites.create_projectile_from_sprite(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . 5 5 5 5 5 5 5 . . . . . . 
                    . . . 5 5 5 5 5 5 5 . . . . . . 
                    . . . 5 5 5 4 5 5 5 . . . . . . 
                    . . . 5 5 4 5 4 5 5 . . . . . . 
                    . . . 5 5 5 4 5 5 5 . . . . . . 
                    . . . 5 5 5 5 5 5 5 . . . . . . 
                    . . . 5 5 5 5 5 5 5 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        """),
        p1,
        50,
        50)
controller.player1.on_button_event(ControllerButton.B,
    ControllerButtonEvent.PRESSED,
    on_player1_button_b_pressed)

def on_player1_connected():
    global p1
    mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.ONE),
        sprites.create(img("""
                ........................
                        .....ffff...............
                        ...fff22fff.............
                        ..fff2222fff............
                        .fffeeeeeefff...........
                        .ffe222222eef...........
                        .fe2ffffff2ef...........
                        .ffffeeeeffff...........
                        ffefbf44fbfeff..........
                        fee41fddf14eef..........
                        .ffffdddddeef...........
                        fddddf444eef............
                        fbbbbf2222f4e...........
                        fbbbbf2222fd4...........
                        .fccf45544f44...........
                        ..ffffffff..............
                        ....ff..ff..............
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
            """),
            SpriteKind.player))
    p1 = mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE))
    controller.player1.move_sprite(p1, 100, 100)
    p1.set_position(28, 91)
controller.player1.on_event(ControllerEvent.CONNECTED, on_player1_connected)

p1: Sprite = None
bullet: Sprite = None
p2: Sprite = None
p3: Sprite = None
p4: Sprite = None
tiles.set_current_tilemap(tilemap("""
    level2
"""))