controller.player4.onEvent(ControllerEvent.Connected, function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(img`
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
        `, SpriteKind.Player))
    p4 = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four))
    controller.player4.moveSprite(p4, 100, 100)
    p4.setPosition(136, 40)
})
controller.player3.onEvent(ControllerEvent.Connected, function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
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
        `, SpriteKind.Player))
    p3 = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three))
    controller.player3.moveSprite(p3, 100, 100)
    p3.setPosition(28, 91)
})
controller.player3.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Released, function () {
    controller.player3.moveSprite(p3, 100, 100)
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Repeated, function () {
    controller.player2.moveSprite(p2, 0, 0)
    if (controller.right.isPressed() && controller.up.isPressed()) {
        projectile2 = sprites.createProjectileFromSprite(img`
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
            `, p2, 50, -50)
        controller.configureRepeatEventDefaults(10, 1000)
    } else if (controller.left.isPressed() && controller.up.isPressed()) {
        projectile2 = sprites.createProjectileFromSprite(img`
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
            `, p2, -50, -50)
        controller.configureRepeatEventDefaults(10, 1000)
    } else if (controller.left.isPressed() && controller.down.isPressed()) {
        projectile2 = sprites.createProjectileFromSprite(img`
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
            `, p2, -50, 50)
        controller.configureRepeatEventDefaults(10, 1000)
    } else if (controller.right.isPressed() && controller.down.isPressed()) {
        projectile2 = sprites.createProjectileFromSprite(img`
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
            `, p2, 50, 50)
        controller.configureRepeatEventDefaults(10, 1000)
    } else if (controller.right.isPressed()) {
        projectile2 = sprites.createProjectileFromSprite(img`
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
            `, p2, 100, 0)
        controller.configureRepeatEventDefaults(10, 1000)
    } else if (controller.up.isPressed()) {
        projectile2 = sprites.createProjectileFromSprite(img`
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
            `, p2, 0, -100)
        controller.configureRepeatEventDefaults(10, 1000)
    } else if (controller.left.isPressed()) {
        projectile2 = sprites.createProjectileFromSprite(img`
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
            `, p2, -100, 0)
        controller.configureRepeatEventDefaults(10, 1000)
    } else if (controller.down.isPressed()) {
        projectile2 = sprites.createProjectileFromSprite(img`
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
            `, p2, 0, 100)
        controller.configureRepeatEventDefaults(10, 1000)
    }
    pause(500)
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Released, function () {
    controller.player2.moveSprite(p2, 100, 100)
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Repeated, function () {
    controller.player1.moveSprite(p1, 0, 0)
    if (controller.right.isPressed() && controller.up.isPressed()) {
        bullet = sprites.createProjectileFromSprite(img`
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
            `, p1, 50, -50)
        controller.configureRepeatEventDefaults(1, 500)
    } else if (controller.left.isPressed() && controller.up.isPressed()) {
        bullet = sprites.createProjectileFromSprite(img`
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
            `, p1, -50, -50)
        controller.configureRepeatEventDefaults(1, 500)
    } else if (controller.left.isPressed() && controller.down.isPressed()) {
        bullet = sprites.createProjectileFromSprite(img`
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
            `, p1, -50, 50)
        controller.configureRepeatEventDefaults(1, 500)
    } else if (controller.right.isPressed() && controller.down.isPressed()) {
        bullet = sprites.createProjectileFromSprite(img`
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
            `, p1, 50, 50)
        controller.configureRepeatEventDefaults(1, 500)
    } else if (controller.right.isPressed()) {
        bullet = sprites.createProjectileFromSprite(img`
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
            `, p1, 100, 0)
        controller.configureRepeatEventDefaults(1, 500)
    } else if (controller.up.isPressed()) {
        bullet = sprites.createProjectileFromSprite(img`
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
            `, p1, 0, -100)
        controller.configureRepeatEventDefaults(1, 500)
    } else if (controller.left.isPressed()) {
        bullet = sprites.createProjectileFromSprite(img`
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
            `, p1, -100, 0)
        controller.configureRepeatEventDefaults(1, 500)
    } else if (controller.down.isPressed()) {
        bullet = sprites.createProjectileFromSprite(img`
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
            `, p1, 0, 100)
        controller.configureRepeatEventDefaults(1, 500)
    }
    pause(500)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
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
        `, SpriteKind.Player))
    p2 = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))
    controller.player2.moveSprite(p2, 100, 100)
    p2.setPosition(136, 40)
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Released, function () {
    controller.player1.moveSprite(p1, 100, 100)
})
controller.player1.onEvent(ControllerEvent.Connected, function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
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
        `, SpriteKind.Player))
    p1 = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))
    controller.player1.moveSprite(p1, 100, 100)
    p1.setPosition(28, 91)
})
let bullet: Sprite = null
let p1: Sprite = null
let projectile2: Sprite = null
let p2: Sprite = null
let p3: Sprite = null
let p4: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
