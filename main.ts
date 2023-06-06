radio.setGroup(13)
radio.setTransmitPower(7)
radio.setTransmitSerialNumber(true)

basic.forever(function () {
    let data = (input.acceleration(Dimension.X) + 1024).toString() + ";" + (input.acceleration(Dimension.Y) + 1024).toString()
    //console.log(data)
     radio.sendString(data)
})

let autoModeEnabled = true
input.onButtonPressed(Button.AB, function() {
    if (autoModeEnabled === true){
        radio.sendNumber(0)
        autoModeEnabled = false
    } else if (autoModeEnabled === false) {
        radio.sendNumber(1)
        autoModeEnabled = true
    }
})