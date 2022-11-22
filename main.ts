input.onButtonPressed(Button.A, function () {
    num += -1
    basic.showNumber(Number2)
})
function Guess_Number (num: number) {
    if (num > 8) {
        return "LOWER"
    } else if (num < 8) {
        return "HIGEHR"
    } else {
        return "NICE"
    }
}
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (Guess_Number(num)))
})
input.onButtonPressed(Button.B, function () {
    num += 1
    basic.showNumber(Number2)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(attempts)
})
let attempts = 0
let num = 0
let Number2 = 0
Number2 = randint(0, 20)
num = 0
attempts = 1
