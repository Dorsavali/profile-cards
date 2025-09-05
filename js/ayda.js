let firstName = prompt("Enter your first name", "Ayda")
let lastName = prompt("Enter your last name", "Taghavi")
let birthYearShamsi = Number(prompt("Enter your birth year (Shamsi)", "1380"))

let age = 1404 - birthYearShamsi
let birthYearMiladi = birthYearShamsi + 621

document.write(`<h1>My name is ${firstName} ${lastName}</h1>`)
document.write(`<h2>I'm ${age} years old</h2>`)
document.write(`<h3>My birth year (Miladi) is ${birthYearMiladi}</h3>`)

