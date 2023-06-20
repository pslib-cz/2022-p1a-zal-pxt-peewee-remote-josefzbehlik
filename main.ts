let data = ""
let autoModeEnabled = false
radio.setGroup(13)
radio.setTransmitPower(7)
// radio.setTransmitSerialNumber(true)
// basic.forever(function () {
//     data = "" + (input.acceleration(Dimension.X) + 1024).toString() + ";" + (input.acceleration(Dimension.Y) + 1024).toString()
//     // console.log(data)
//     radio.sendString(data)
// })
// input.onButtonPressed(Button.AB, function() {
//   if (autoModeEnabled === false){
//     radio.sendNumber(1)
//     autoModeEnabled = true}
//     else{
//           radio.sendNumber(0)
//           autoModeEnabled = false
//     }
//   }  
// )
input.onButtonPressed(Button.A, function () {
radio.sendNumber(5)
})
input.onButtonPressed(Button.B, function () {
radio.sendNumber(10)
})
input.onButtonPressed(Button.AB, function() {
    radio.sendNumber(15)
})







