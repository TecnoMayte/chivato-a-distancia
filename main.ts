/**
 * RECEPTOR
 */
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > 128) {
        basic.showString("1")
    } else {
        basic.clearScreen()
    }
    if (receivedNumber < 128) {
        basic.showString("2")
    } else {
        basic.clearScreen()
    }
})
radio.setGroup(1)
let habitación1 = input.lightLevel()
let habitación2 = input.lightLevel()
/**
 * EMISOR 2
 */
basic.forever(function () {
    radio.sendNumber(input.lightLevel())
    basic.pause(1000)
})
/**
 * EMISOR 1
 */
basic.forever(function () {
    radio.sendNumber(input.lightLevel())
    basic.pause(1000)
})
