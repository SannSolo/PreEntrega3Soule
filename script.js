console.log("hola mundo")

// Scipt OK // 

alert("Bienvenidx a INCOMODO")

let nombreUsuario = prompt("Ingresa tu nombre")

localStorage.setItem("user", nombreUsuario)

let userName = document.getElementById("welcome")

userName.textContent = "Bienvenidx " + nombreUsuario

let edad = prompt("Ingresa el año de tu nacimiento")

edad = parseInt(edad)

var mayorOk = 2023 - edad

console.log("Tu edad es de " + mayorOk + " años")

if (mayorOk >= 18 && mayorOk <= 90) {

    alert("Estás listx para vestirte con INCOMODO")
} 

else {
    alert("No puedes realizar compras");
    throw new Error("Finalización de ejecución");
}


// // finaliza evaluacion de edad mayor de 18 años y menor de 90 años  //


console.log("LOS MODELOS SON")

let prendas = [
    {
        id: 1,
        nombre: "pantalon sabri",
        precio: 8900,
        stock: 5,
        talle: "unico",
        imagen: "./img/modelo_1.jpg",
    },
    {
        id: 2,
        nombre: "bluson urban escote v",
        precio: 7000,
        stock: 3,
        talle: "unico",
        imagen: "./img/modelo_2.jpg",
    },
    {
        id: 3,
        nombre: "pollera pantalon momo",
        precio: 6900,
        stock: 0,
        talle: "s",
        imagen: "./img/modelo_3.jpg",
    },
    {
        id: 4,
        nombre: "solero japon",
        precio: 8600,
        stock: 6,
        talle: "m",
        imagen: "./img/modelo_4.jpg",
    },
    {
        id: 5,
        nombre: "vestido rectangulo",
        precio: 7580,
        stock: 4,
        talle: "unico",
        imagen: "./img/modelo_5.jpg",
    },
    {
        id: 6,
        nombre: "bluson urban bote",
        precio: 2900,
        stock: 0,
        talle: "s",
        imagen: "./img/modelo_6.jpg",
    },
    {
        id: 7,
        nombre: "chaqueta mirta",
        precio: 1900,
        stock: 1,
        talle: "m",
        imagen: "./img/modelo_7.jpg",
    },
    {
        id: 8,
        nombre: "saco vasco",
        precio: 6900,
        stock: 2,
        talle: "unico",
        imagen: "./img/modelo_8.jpg",
    }
]

let contenedorProductos = document.getElementById("prendas")

console.log(prendas)

prendas.forEach((prenda) => {
    console.log(prenda)

    let contenedor = document.createElement("div")

    contenedor.innerHTML = `
        <div class="card">
            <img class="card-img-top" style="width:400px" src="${prenda.imagen}" alt="Card image">
            <div class="card-body">
                <h4 class="card-title">${prenda.nombre}</h4> 
                <h3 class="card-text">$${prenda.precio}</h3>
                <p class="card-text">talle ${prenda.talle}</p>
                <button type="button" class="btn btn-primary">Agregar al carrito</button>
            </div>
        </div>
    `;

    contenedorProductos.appendChild(contenedor)
})

let botonesAgregar = document.querySelectorAll(".btn-primary")

botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", avisoAdd)
})

function avisoAdd() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Agregaste una nueva prenda al carrito',
        showConfirmButton: false,
        timer: 2000
    })
}


prendas.forEach((prenda) => console.log(prenda.nombre));

console.log("              LOS PRECIOS (en mismo orden que modelo)                      ")

prendas.forEach((prenda) => console.log(prenda.precio))

console.log("          PRODUCTOS EN STOCK              ")


let enStock = prendas.filter((prenda) => prenda.stock > 0)
console.log(enStock);

console.log("          PRODUCTOS TALLE UNICO              ")

let talleUnico = prendas.filter((prenda) => prenda.talle === "unico")
console.log(talleUnico)


