//Monica Can, 04/26/2024

function addition(number) {
    let additionMsg = '';
    for (let i = 1; i <= 10; i++) {
        const result = i + number;
        additionMsg += `${i} + ${number} = ${result}<br>`;
    }
    return additionMsg;
}

function subtraction(number) {
    let subtractionMsg = '';
    var i = 1;
    while (i <= 10) {
        const result = i - number;
        subtractionMsg += `${i} - ${number} = ${result}<br>`;
        i++;
    }
    return subtractionMsg;
}

function multiplication(number) {
    let multiplicationMsg = '';
    var i = 1;
    do {
        const result = i * number;
        multiplicationMsg += `${i} * ${number} = ${result}<br>`;
        i++;
    } while (i <= 10);
    return multiplicationMsg;
}

function division(number) {
    let divisionMsg = '';
    var i = 1;
    do {
        const result = i / number;
        divisionMsg += `${i} / ${number} = ${result.toFixed(2)}<br>`;
        i++;
    } while (i <= 10);
    return divisionMsg;
}

function calculate(event) {
    event.preventDefault(); //important!! prevent a submit button from submitting a form

    const number = Number(document.getElementById('num').value);
    const additionMsg = addition(number);
    const subtractionMsg = subtraction(number);
    const multiplicationMsg = multiplication(number);
    const divisionMsg = division(number);

    document.getElementById('add').innerHTML = additionMsg;
    document.getElementById('subtract').innerHTML = subtractionMsg;
    document.getElementById('multiply').innerHTML = multiplicationMsg;
    document.getElementById('divide').innerHTML = divisionMsg;
}

document.getElementById('calculate').addEventListener("click", calculate);

