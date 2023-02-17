distance = 0

def on_forever():
    global distance
    distance = sonar.ping(DigitalPin.P2, DigitalPin.P1, PingUnit.CENTIMETERS)
    basic.show_number(distance)
    if True:
        pass
basic.forever(on_forever)
