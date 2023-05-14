radio.setGroup(13)
radio.setTransmitSerialNumber(true)

    //OSA Y
let jizdaY = 0
let centraceY = jizdaY

    //OSA X
let jizdaX = 0
let centraceX = jizdaX

    //CENTRACE
basic.forever(function() {
    jizdaY = input.acceleration(Dimension.Y)
    jizdaX = input.acceleration(Dimension.X)

    console.log(jizdaY)
    input.onButtonPressed(Button.AB, function() {
        centraceY = jizdaY
        centraceX = jizdaX
    })

    Math.round(centraceY)
    Math.round(centraceX)
    console.logValue("y", centraceY)

    //JÍZDA 
    if (jizdaY > centraceY) {
        radio.sendValue("BACK", 14)
    }
    if (jizdaY < centraceY) {
        radio.sendValue("GO", 13)
    }

    //OTÁČENÍ
    if (jizdaX > centraceX) {
        radio.sendValue("RIGHT", 15)
    }
    if (jizdaX < centraceX) {
        radio.sendValue("LEFT", 16)
    }
})

    



    



    





