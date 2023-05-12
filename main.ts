radio.setGroup(13)
radio.setTransmitSerialNumber(true)

let accY = 0
let center = accY
let y = input.acceleration(Dimension.Y)

let block = false

basic.forever(function () {
    accY = input.acceleration(Dimension.Y)

        input.onButtonPressed(Button.AB, function () {
            center = accY
                accY = input.acceleration(Dimension.Y)
                Math.round(center)
            console.logValue("y", center)
        })
})

//POSÍLÁNÍ ROZKAZU JET DO PŘEDU NEBO DO ZADU
if (accY > center) {
    radio.sendValue("GO", 18)
}

if (accY < center) {
    radio.sendValue("BACK", 17)
}

//POSÍLÁNÍ ROZKAZU OTOČIT SE
input.onButtonPressed(Button.A, function () {
    radio.sendValue("LEFT", 16)
})

input.onButtonPressed(Button.B, function () {
    radio.sendValue("RIGHT", 15)
})
