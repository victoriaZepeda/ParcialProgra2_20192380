function subtotal() {
    var compra = document.getElementById("compra").value;
    var precio = document.getElementById("precio").value;
    var cantidad = document.getElementById("cantidad").value;
    var presupuesto = document.getElementById("presupuesto").value;
    var estado = document.getElementById("estado").value;

    subtotal=precio*cantidad
    alert("Su subtotal es: " + subtotal);

    if (subtotal>presupuesto){
        estado=="sobre"
    } else {
        estado=="dentro"
    }

    


}