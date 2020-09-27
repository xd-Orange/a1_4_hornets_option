let x = 0
// The program rolls a digital die to randomly select a number between 1 and 6. Pressing the A button starts the roll.
input.onButtonPressed(Button.A, function () {
    // clears screen before each roll
    basic.clearScreen()
    // sets the value of 'x' to a random number between 0 and 5
    x = randint(0, 4)
    // If x = 5 when rolled, show number 5 on the LED grid.
    // If x = 4 when rolled, show number 4 on the LED grid.
    // If x = 3 when rolled, show number 3 on the LED grid.
    // If x = 2 when rolled, show number 2 on the LED grid.
    // If x = 1 when rolled, show number 1 on the LED grid.
    if (x == 5) {
        basic.showNumber(5)
    } else if (x == 4) {
        basic.showNumber(4)
    } else if (x == 3) {
        basic.showNumber(3)
    } else if (x == 2) {
        basic.showNumber(2)
    } else if (x == 1) {
        basic.showNumber(1)
    } else {
        // If x does not equal 1, 2, 3, 4, or 5 when rolled, show number 6 on the LED grid.
        basic.showNumber(6)
    }
})
