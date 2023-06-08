
let data = ""
let autoModeEnabled = false
radio.setGroup(13)
radio.setTransmitPower(7)
radio.setTransmitSerialNumber(true)
autoModeEnabled = true
basic.forever(function () {
    data = "" + (input.acceleration(Dimension.X) + 1024).toString() + ";" + (input.acceleration(Dimension.Y) + 1024).toString()
    // console.log(data)
    radio.sendString(data)
})
input.onButtonPressed(Button.AB, function () {
    if (autoModeEnabled == true) {
        radio.sendNumber(0)
        autoModeEnabled = false
    } else if (autoModeEnabled == false) {
        radio.sendNumber(1)
        autoModeEnabled = true
    }
})