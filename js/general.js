const arrayProductos = []

function recuperarCarritoInstrumentos() {
    return JSON.parse(localStorage.getItem('CarritoInstrumentos')) || []
}

const carritoInstrumentos = recuperarCarritoInstrumentos()

function guardarCarritoInstrumentos() {
    localStorage.setItem('CarritoInstrumentos', JSON.stringify(carritoInstrumentos))
}

function listarProductosEnCarritoHTML(instrumento) {
    return `<tr>
                <td>${instrumento.imagen}</td>
                <td>${instrumento.nombre}</td>
                <td>$ ${instrumento.importe.toLocaleString()}</td>
                <td id="${instrumento.codigo}" class="boton-quitar" title="Quitar del carrito">❌</td>
            </tr>`
}

function retornarCardError() {
    return `<div class="card-error">
                <h2>Tenemos un problema</h2>
                <h3>Vuelve a intentar en unos minutos...</h3>
                <h4>⏳</h4>
            </div>`
}

function retornarCardHTML({ imagen, codigo, nombre, importe } = producto ) {
   return `<div class="div-card">
                <div class="imagen">
                    <h1>${imagen}</h1>
                </div>
                <div class="prenda">
                    <p>${nombre}</p> 
                </div>
                <div class="importe">
                    <p>$ ${importe}</p>
                </div>
                <div class="comprar"><button class="button button-outline button-add" id="${codigo}">add</button></div>
           </div>`
}