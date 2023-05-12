radio.setGroup(13)
radio.setTransmitSerialNumber(true)

let accY = 0
let center = accY
let y = input.acceleration(Dimension.Y)

let controls = false

basic.forever(function () {
    accY = input.acceleration(Dimension.Y)

        input.onButtonPressed(Button.AB, function () {
            basic.pause(500)
            center = accY
                accY = input.acceleration(Dimension.Y)
                    Math.round(center)
                controls = true
            console.log(center)
        })

    //POSÍLÁNÍ ROZKAZU JET DO PŘEDU NEBO DO ZADU
    if (controls = true) {
        if (y < center) {
            radio.sendValue("GO", 18)
        }

        if (y > center) {
            radio.sendValue("BACK", 17)
        }
    }

    //POSÍLÁNÍ ROZKAZU OTOČIT SE
    input.onButtonPressed(Button.A, function () {
        radio.sendValue("RIGHT", 16)
    })

    //ZASTAVIT
    input.onButtonPressed(Button.B, function () {
        radio.sendValue("STOP", 15)
    })

})



