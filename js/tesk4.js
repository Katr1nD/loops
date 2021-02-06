function findNumericQuantity() {
    const number = getElementValue('number');
    let quantity = 0;
    for (let i = 1;; i++) {

        do {
            document.getElementById('nimeriqQuantity').innerHTML = 'The numeric quantity is ' + quantity;
            quantity++;

        } while (number % i !== 0) {}
    }
}