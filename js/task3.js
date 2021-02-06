function findDivisors() {
    const number = Number(document.getElementById('number').value);
    let allDivisors = '1';

    for (let i = 2; i <= number; i++) {

        if (number % i === 0) {
            allDivisors += ', ' + i;
        }
    }

    document.getElementById('allDivisors').innerText = allDivisors;
}