let listaNombreGastos = [];
let listaValoresGastos = [];
let listaDescripcionesGastos = [];

//Esta funcion se invoca en el momento que el usuario hace clic en el
//boton
function clickBoton (){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;

    console.log(nombreGasto);
    console.log(valorGasto);
    console.log(listaNombreGastos);
    console.log(descripcionGasto);

    //condicion cuando se registre un gasto mayor a 150 dolares
    if (valorGasto > 150){
        alert('El gasto registrado es mayor a 150$');
    }

 
    listaNombreGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    listaDescripcionesGastos.push(descripcionGasto);
    
    
    
    console.log(listaNombreGastos);
    console.log(listaValoresGastos);
    //alert('click de usuario');
    actualizarListaGastos();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;
    listaNombreGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos [posicion]);
        const descripcionGasto = listaDescripcionesGastos[posicion];
        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)}
        <br>Descripción: ${descripcionGasto}
        <div>
        <button onclick="modificarGasto(${posicion});">Modificar</button>
        <button onclick="eliminarGasto(${posicion});">eliminar</button>
        </div>
        </li>`;
        //Calculamos el total de gastos
        totalGastos += Number(valorGasto);
        console.log(totalGastos);
    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function limpiar(){
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('descripcionGasto').value = '';
}

function eliminarGasto(posicion){
    listaNombreGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    actualizarListaGastos();
}

function modificarGasto(posicion){
    document.getElementById('nombreGasto').value = listaNombreGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];
    document.getElementById('descripcionGasto').value = listaDescripcionesGastos[posicion];

    const botonFormulario = document.getElementById('botonFormulario');
    botonFormulario.innerText = 'Actualizar Gasto';

    botonFormulario.onclick = function(){
        actualizarGastos(posicion);
    }
}

function actualizarGastos(posicion){
    listaNombreGastos[posicion] = document.getElementById('nombreGasto').value;
    listaValoresGastos[posicion] = document.getElementById('valorGasto').value;
    listaDescripcionesGastos[posicion] = document.getElementById('descripcionGasto').value;

    const botonFormulario = document.getElementById('botonFormulario');
    botonFormulario.innerText = 'Agregar Gasto'
    botonFormulario.onclick = clickBoton;

    actualizarListaGastos();
}