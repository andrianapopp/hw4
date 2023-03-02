let x = prompt(`first_number`)
let y = prompt(`second_umber`)
let action = prompt(`Choose an action: sum, subtraction, multiplication, division`)

if (action === `sum`){
    let z = parseFloat(x) + parseFloat(y)
    alert(`Результат: ${x} + ${y}=${z}`)
}
else
    if (action === `subtraction`){
    let z = x - y
    alert(`Результат: ${x} - ${y}=${z}`)
}
else
    if (action === `multiplication`){
    let z = x * y
    alert(`Результат: ${x} * ${y}=${z}`)
}
else
    if (action === `division`){
    let z = x / y
    alert(`Результат: ${x} / ${y}=${z}`)
}
    else;