input.onButtonPressed(Button.A, function () {
    Number2 += -1
    basic.showNumber(Number2)
})
function Guess_Number (num: number) {
    if (num > Number2) {
        return "LOWER"
    } else if (num < Number2) {
        return "HIGHER"
    } else {
        return "NICE"
    }
}
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (Guess_Number(num)))
})
input.onButtonPressed(Button.B, function () {
    Number2 += 1
    basic.showNumber(Number2)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(attempts)
    attempts += 1
})
let attempts = 0
let num = 0
let Number2 = 0
Number2 = randint(0, 20)
num = randint(0, 20)
attempts = 1
