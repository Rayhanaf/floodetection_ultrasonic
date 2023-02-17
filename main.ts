let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    basic.showNumber(distance)
    if (distance <= 10) {
        basic.pause(100)
        music.playTone(880, music.beat(BeatFraction.Breve))
    }
})
