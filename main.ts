radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > 50) {
        basic.showIcon(IconNames.Ghost)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.clearScreen()
    }
})
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(input.lightLevel())
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
