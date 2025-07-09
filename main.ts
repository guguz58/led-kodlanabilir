input.onButtonPressed(Button.A, function () {
    strip.show()
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
input.onButtonPressed(Button.AB, function () {
    strip.show()
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
})
input.onButtonPressed(Button.B, function () {
    strip.show()
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    strip.clear()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P8, 64, NeoPixelMode.RGB)
