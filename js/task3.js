function findDivisors() {
    const number = document.getElementById('number').value;
    let allDivisors = [];

    for (let i = 1; i < number; i++) {

        if (number % i === 0) {
            allDivisors.push(i);
            break;
        }
    }
    document.getElementById('allDivisors').innerText = allDivisors;
}