input.onButtonPressed(Button.A, function () {
    group += 1
})
input.onButtonPressed(Button.AB, function () {
    if (group != 99) {
        group += 1
        basic.showNumber(group)
        basic.showString(code)
        radio.setGroup(group)
        radio.sendValue(code, group)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(group)
    basic.showNumber(group)
    if (group == 1) {
        code = "?"
    }
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
})
radio.onReceivedValue(function (name, value) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(100)
    basic.showNumber(value)
    basic.showString(name)
    code = name
    group = value
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
let code = ""
let group = 0
radio.setGroup(99)
group = 0
code = "You can do it!(maybe......)"
