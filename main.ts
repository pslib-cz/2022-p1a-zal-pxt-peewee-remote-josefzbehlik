radio.setGroup(13)
radio.setTransmitPower(7)
radio.setTransmitSerialNumber(true)

basic.forever(function () {
    let data = (input.acceleration(Dimension.X) + 1024).toString() + ";" + (input.acceleration(Dimension.Y) + 1024).toString()
    //console.log(data)
     radio.sendString(data)
})