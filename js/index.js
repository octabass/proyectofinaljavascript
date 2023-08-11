const productosEnCarrito = document.querySelector('span#productosEnCarrito')
const container = document.querySelector('div#container.container')
const inputSearch = document.querySelector('input#inputSearch')
const URL = 'js/instrumento.json'

function mostrarTotalProdsEnCarrito() {
    productosEnCarrito.textContent = carritoInstrumentos.length
}

carritoInstrumentos.length > 0 && mostrarTotalProdsEnCarrito()

function activarClickEnBotones() {
    const botones = document.querySelectorAll('button.button.button-outline.button-add')
    botones.forEach((boton)=> {
        boton.addEventListener('click', ()=> {
            let producto = arrayProductos.find((instrumento)=> instrumento.codigo === parseInt(boton.id))
            carritoInstrumentos.push(producto)
            guardarCarritoInstrumentos()
            mostrarTotalProdsEnCarrito()
        })
    })
}

function cargarProductos(array) {
    container.innerHTML = ""
    array.forEach((producto)=> container.innerHTML += retornarCardHTML(producto) )
    activarClickEnBotones()
}


inputSearch.addEventListener('search', ()=> {
    localStorage.setItem("ultimaBusqueda", inputSearch.value)
    const resultado = arrayProductos.filter((instrumento)=> instrumento.nombre.toLowerCase().includes(inputSearch.value.toLowerCase()))
    cargarProductos(resultado)
})

function obtenerInstrumentos() {
    fetch(URL)
    .then((response)=> response.json())
    .then((data)=> arrayProductos.push(...data))
    .then(()=> cargarProductos(arrayProductos))
    .catch((error)=> container.innerHTML = retornarCardError())
}
obtenerInstrumentos()