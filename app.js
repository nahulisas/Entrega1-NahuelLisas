// Programa que mide la distancia entre dos numeros

let num1 = Number(prompt('Elija el primer numero: '))
let num2 = Number(prompt('Elija el segundo numero: '))
let distancia = 0

let sumarDistancia = () => {

    if (num1 < num2) {
        for (let i = num1; i < num2; i++) {
            distancia++
        }
    } else {
        for (let i = num1; i > num2; i--) {
            distancia--
        }
    }

    return `La distancia entre ${num1} y ${num2} es ${distancia}`

}

let sumaTotal = sumarDistancia()
alert(sumaTotal);



