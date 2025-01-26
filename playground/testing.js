function extractNumbers(input) {
    let numbers = input.match(/\d+/g);
    if (numbers) {
        return numbers.join("");
    } else {
        alert("The input has no number.");
        return false;
    }
}
