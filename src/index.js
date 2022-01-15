module.exports = function toReadable (number) {
    let firstNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let secondNum = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let thirdNum = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let finite = [];
    let hundreds = Math.floor(number / 100);
    let duble = number % 100;
    let single = duble % 10;
    if (number === 0) return ['zero'];
    if (hundreds > 0) {
        finite.push(firstNum[hundreds]);
        finite.push('hundred');
    }
    if (duble >= 20) {
        finite.push(thirdNum[Math.floor(duble / 10)]);
        if (single !== 0) finite.push(firstNum[single]);
    }
    else if (duble >= 10) finite.push(secondNum[duble % 10]);
    else if (duble !== 0) finite.push(firstNum[single]);
    return finite.join(' ');
}
