function reservaDesayuno (nombreDelCliente, numeroDePersonas, horaDeLaReserva) {

    return `Reserva de desayuno confirmada para ${nombreDelCliente} a las ${horaDeLaReserva} para ${numeroDePersonas} personas.`

}
console.log(reservaDesayuno("Valentina", 10, "8am"));
console.log(reservaDesayuno("Cesar", 5, "8:30am"));
console.log(reservaDesayuno("Maria", 2, "10:10am")); 

function reservaComida (nombreDelCliente, numeroDePersonas, horaDeLaReserva) {

    return `Reserva de comida confirmada para ${nombreDelCliente} a las ${horaDeLaReserva} para ${numeroDePersonas} personas.`
}
console.log(reservaComida("nilsa", 8, "5pm"));
console.log(reservaComida("jonathan", 20, "6:30pm"));

function reservaCena (nombreDelCliente, numeroDePersonas, horaDeLaReserva) {

    return `Reserva de cena confirmada para ${nombreDelCliente} a las ${horaDeLaReserva} para ${numeroDePersonas} personas.`
}
console.log(reservaCena("Gabriela", 15, "7pm"));
console.log(reservaCena("Carlos", 7, "9:30pm"));

function gestionarReserva (){
    console.log("tipo reserva");
    console.log("desayuno, comida, cena");

    console.log("reservas confirmadas");

    console.log("reserva desayuno")
    console.log(reservaDesayuno("Maria", 2, "10:10am")); 

    console.log("reservas comida")
    console.log(reservaComida("jonathan", 20, "6:30pm"));

    console.log("reservas cena");
    console.log(reservaCena("Gabriela", 15, "7pm"));
    
}
    gestionarReserva()