

// -------------------PRODUCTOS--------------------------//
const productos = [ 
  {id:0, nombre: "GORRO", precio: 50, img: "img/gorro.jpg" },
  {id:1, nombre: "REMERA", precio: 100, img: "img/remera.jpg" },
  {id:2, nombre: "PANTALON", precio: 150, img: "img/pantalon.jpg" },
  {id:3, nombre: "ZAPATILLAS", precio: 200, img: "img/zapatillas.jpg" }
]

// -------------------LOGEARSE--------------------------//

let usuario;

let usuarioEnLs = localStorage.getItem('usuario')

if (usuarioEnLs != null){
  usuario = usuarioEnLs
}

let logOutBtn = document.querySelector('#log-out')
let logInBtn = document.querySelector('#log-in')
let nameInput = document.querySelector('#name')

logOutBtn.addEventListener('click', ()=> {
  localStorage.removeItem('usuario');
  logOutBtn.style.visibility = "hidden";
  nameInput.style.visibility = "visible";
  logInBtn.style.visibility = "visible";
  
  document.getElementById('bienvenida').innerHTML = `Hola!`
})


logInBtn.addEventListener('click', () => {
  usuario = nameInput.value
  localStorage.setItem('usuario', usuario);
  document.getElementById('bienvenida').innerHTML = `Hola! ${usuario}`
  logInBtn.style.visibility = "hidden";
  nameInput.style.visibility = "hidden";
  logOutBtn.gstyle.visibility = "visible";
})

// -------------------CARRO DE COMPRAS--------------------------//
const carroCompras = []

let cards = document.getElementById("cardProductos")

productos.forEach(producto=>{
  let card = document.createElement("div")

  card.className="text-center col-12 col-sm-3 pt-5 "

  card.innerHTML = 
  `<div class="card" style="width: 18rem;">
   <img src="${producto.img}" class="card-img-top"  width="80" height="250">
   <div class="card-body">
   <h5 class="card-title"><P>${producto.nombre}</P></h5>
   <p class="card-text "><P>$${producto.precio}</P></p>
   <button id="comprar" onclick="Comprar(${producto.id})" class="btn btn-primary">COMPRAR</a>
   </div>
   </div>
  `
    cards.append(card)
  });

let nav = document.getElementById("nav")
nav.innerHTML = `
<nav class="navbar navbar-expand-lg bg-light">  
  <div class="container-fluid">
    <a class="navbar-brand" href="#">COMPRAS ONLINE</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-item">
          <a class="nav-link ">CONTACTO</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <button class="btn btn-outline-success " type="submit">COMPRAS</button>
        <img class="logonavbar"  src="img/carro.png" width="60" height="40"
      </form>
    </div>
  </div>
</nav>
`
const Comprar = (x)=>{
  carroCompras.push(productos[x])
  console.log(carroCompras)
}
