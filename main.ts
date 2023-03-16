let 亮度 = 0
basic.forever(function () {
    if (亮度 < 255) {
        led.plotBrightness(0, 0, 亮度)
        亮度 = 亮度 + 1
    }
})
