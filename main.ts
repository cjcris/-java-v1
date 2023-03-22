input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    led.stopAnimation()
})
basic.forever(function () {
    basic.pause(9000)
    basic.showString("MOVE!")
})
