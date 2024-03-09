console.log("Test JS")
const cafes = [
  {
    id: 1,
    nombre: "Original blend 200g",
    precio: 500,
    cantidad: 0
  },
  {
    id: 2,
    nombre: "Original blend 500g ",
    precio: 900,
    cantidad: 0
  },
  {
    id: 3,
    nombre: "Special blend 200g",
    precio: 700,
    cantidad: 0
  },
  {
    id: 4,
    nombre: "Special blend 500g",
    precio: 1200,
    cantidad: 0
  }
]

let compras = []

function add(){
  const id =document.getElementById("product").value
  const cant =document.getElementById("number").value
  console.log(id, cant)
  const producto = cafes.find((cafe) => cafe.id ==id)
  console.log(producto)
  const comprobar = compras.find((compra) => compra.id ==id)

  if (comprobar) {
    comprobar.cantidad += parseInt(cant)
  }else{
    producto.cantidad = parseInt(cant)
    compras.push(producto)
  }
  console.log(compras)
  
  mostrar()
}


function mostrar () {
  let mensaje = ""
  for (const compra of compras) {
    mensaje += `${compra.nombre} - ${compra.cantidad} Precio: ${compra.precio}\n`
  }
  alert(mensaje)
}

function calc() {
  let total = 0
  for (const compra of compras) {
    total += compra.precio * compra.cantidad
  }

const envioValue = envio(total)
let mensaje = ""
for (const compra of compras) {
  mensaje +=`${compra.nombre} - ${compra.cantidad}\n`
}
alert(`${mensaje} Subtotal de la orden: ${total}. Envío: ${envioValue} \nTotal: ${total + envioValue}`)
compras = []
}


function envio(result){
  let envio;

  if (result < 2000){
    envio = 500
  }else if(result >= 2000 && result < 3000){
    envio = 250
  }else { 
    envio = 0
  }

  return envio
}