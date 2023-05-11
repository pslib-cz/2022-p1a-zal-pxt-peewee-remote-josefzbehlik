let x = 2
let y = 2

radio.setGroup(1)


let accX = 0
let accY = 0
let accZ = 0

let calibrateX = accX
let calibrateY = accY
let calibrateZ = accZ

let rX = 0
let rY = 0
let rZ = 0
let block = false

    accX = input.acceleration(Dimension.X)
    accY = input.acceleration(Dimension.Y)

input.onButtonPressed(Button.AB, function () {
        calibrateX = accX
        calibrateY = accY

            basic.showIcon(IconNames.Duck)

            accX = input.acceleration(Dimension.X)
            accY = input.acceleration(Dimension.Y)

        Math.round(calibrateX)
        Math.round(calibrateY)

        console.logValue("x", calibrateX)
        console.logValue("y", calibrateY)
        basic.clearScreen()
})


