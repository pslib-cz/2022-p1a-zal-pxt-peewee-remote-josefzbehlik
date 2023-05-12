radio.setGroup(13)
radio.setTransmitSerialNumber(true)


let accY = input.acceleration(Dimension.Y)
let calibrateY = accY
let center = 0

//CENTRACE
input.onButtonPressed(Button.AB, function () {
    center = accY
        basic.pause(500)
    console.log(center)
})

//POSÍLÁNÍ ROZKAZU JET DO PŘEDU NEBO DO ZADU
if(accY > center) {
    radio.sendValue("GO", 18)
}

if(accY < center) {
    radio.sendValue("BACK", 17)
}

//POSÍLÁNÍ ROZKAZU OTOČIT SE
input.onButtonPressed(Button.A, function () {
    radio.sendValue("LEFT", 16)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("RIGHT", 15)
})


