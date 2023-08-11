const tableBody = document.querySelector('tbody')
const sectionProductos = document.querySelector('section')
const btnComprar = document.querySelector('button#btnComprar')

function mostrarMsgCarritoVacio() {
    return `<div class="card-error">
                <h3>El carrito está vacío</h3>
                <h4>🛒</h4>
            </div>`
}

function activarClickQuitarDelCarrito() {
    const botonesQuitar = document.querySelectorAll('td.boton-quitar')
    botonesQuitar.forEach((botonQuitar)=> {
        botonQuitar.addEventListener('click', ()=> {
            let codigo = parseInt(botonQuitar.id)
            let indice = carritoInstrumentos.findIndex((instrumento)=> instrumento.codigo === codigo) 
            carritoInstrumentos.splice(indice, 1) 
            armarCarrito()                  
            guardarCarritoInstrumentos()         
        })
    })
}

function armarCarrito() {
    tableBody.innerHTML = ''
    if (carritoInstrumentos.length > 0) {
        carritoInstrumentos.forEach((instrumento)=> tableBody.innerHTML += listarProductosEnCarritoHTML(instrumento) )
        activarClickQuitarDelCarrito()
    } else {
        sectionProductos.innerHTML = mostrarMsgCarritoVacio()
    }
}
armarCarrito()

btnComprar.addEventListener('click', ()=> {
        Swal.fire({
            title: '¿Confirmas la compra de los productos?',
            icon: 'question',
            showDenyButton: true,
            confirmButtonText: 'CONFIRMAR',
            denyButtonText: 'CANCELAR'
          }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('CarritoInstrumentos')
                carritoInstrumentos.length = 0
                Swal.fire('Muchas gracias por su compra!', '', 'success')
                sectionProductos.innerHTML = mostrarMsgCarritoVacio()
            }
        })
})
