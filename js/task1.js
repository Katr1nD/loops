/**
 * Get element by id
 */
function getElementValue(id) {
    return Number(document.getElementById(id).value);
}

/**
 * First task
 */
function sumNumbers() {
    let primary = getElementValue('primaryNumber');
    const last = getElementValue('lastNumber');
    let sum = 0;

    if (!isNaN(primary) && !isNaN(last)) {

        if (primary <= last) {

            for (; primary <= last; primary++) {
                sum += primary;
            }
            document.getElementById('sum').innerHTML = 'The sum of all numbers in a givem range is qual to ' + sum;
        } else {
            document.getElementById('sum').innerHTML = 'Initial value of the range is greater than the end value.';
        }
    } else {
        document.getElementById('sum').innerHTML = 'Invalid value.';
    }

    // document.getElementById('sum').innerHTML = result;
}