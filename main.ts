radio.onReceivedNumber(function (receivedNumber) {
    basic.pause(1000)
    radio.sendNumber(_)
    basic.showString("" + (_))
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(_)
})
let _ = 0
_ = 0
