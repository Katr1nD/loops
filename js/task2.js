function findNOD() {
    const first = getElementValue('first');
    const second = getElementValue('second');
    let divisor = 1;

    let minValue = (first < second) ? first : second;

    for (let i = minValue; i > 0; i--) {

        if (first % i === 0 && second % i === 0) {
            divisor = i;
            break;
        }
    }
    document.getElementById('commonDivisor').innerText = divisor;
}