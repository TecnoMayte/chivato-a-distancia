/**
 * RECEPTOR
 */
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
let habitación1 = input.lightLevel()
let habitación2 = input.lightLevel()
/**
 * EMISOR 1
 */
basic.forever(function () {
    if (habitación1 < 130) {
        radio.sendString("1")
        basic.pause(1000)
        basic.clearScreen()
    }
})
/**
 * EMISOR 2
 */
basic.forever(function () {
    if (habitación2 < 100) {
        radio.sendString("2")
        basic.pause(1000)
        basic.clearScreen()
    }
})
