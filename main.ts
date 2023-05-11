radio.setGroup(13)
radio.setTransmitSerialNumber(true)


input.onButtonPressed(Button.A, function () {
    radio.sendValue("GO", 18)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("STOP", 16)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("BACK", 17)
})