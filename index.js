// Obtiene el elemento con la etiqueta h1 en el documento HTML
const h1 = document.querySelector('h1');

// Obtiene el elemento con el ID "form" en el documento HTML
const form = document.querySelector('#form');

// Obtiene el elemento con el ID "calculo1" en el documento HTML
const input1 = document.querySelector('#calculo1');

// Obtiene el elemento con el ID "calculo2" en el documento HTML
const input2 = document.querySelector('#calculo2');

// Obtiene el elemento con el ID "btnCalcular" en el documento HTML
const btn = document.querySelector('#btnCalcular');

// Obtiene el elemento con el ID "result" en el documento HTML
const pResult = document.querySelector('#result');

// Asigna un controlador de eventos al formulario para escuchar el evento "submit"
form.addEventListener('submit', sumarInputValues);

// La función "sumarInputValues" se ejecutará cuando se envíe el formulario
function sumarInputValues(event) {
    // Evita que el formulario se envíe y se recargue la página
    event.preventDefault();
    
    // Imprime un mensaje en la consola del navegador
    console.log('Escuchando el evento del botón');
    
    // Convierte los valores de los inputs a números enteros y los suma
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    
    // Asigna el resultado a la propiedad innerHTML del elemento pResult
    pResult.innerHTML = 'Resultado: ' + sumaInputs.toString();
}

// btn.addEventListener('click', btnOnClick);

// function btnOnClick() {
//     console.log('Escuchando el evento del botón');
//     const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
//     pResult.innerHTML = 'Resultado: ' + sumaInputs.toString();
//     // console.log(parseInt(input1.value) + parseInt(input2.value));
// }


