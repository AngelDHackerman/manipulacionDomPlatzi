'use strict';
window.addEventListener('load', () => { 

const container = document.querySelector('p.parrafo1');//seleciona un parrafo con la clase parrafo1
const h3 = document.createElement('h3');
const texto = document.createTextNode('Texto del h3 creado con JS');

          // usando createElement & createTextNode

h3.append(texto);
container.append(h3);

container.append('hola 2', document.createElement('div'));// hola 2 es un texto agregado directamente, NO valido para internet explorer

          // document.insertBefore(node, referencia);

          // node.outerHTMl (leer) & node.innerHTML (escribir)

let h2 = document.querySelector('h2.seccion-subTitulo');

console.group(`node.outerHTML (leer) & node.innerHTML (escribir)`);
  console.log(`usando el outerHTML:`,h2.outerHTML );
  console.log(`usando el innerHTML:`,h2.innerHTML );
  
                //node.outerHTML.repalce
  
let parrafoSeccion = document.querySelector('p.parrafo3');
let nuevoParrafo = parrafoSeccion.outerHTML.replace('ESPANOL', 'INGLES') //replaza la palabra espanol por ingles
parrafoSeccion.innerHTML = nuevoParrafo;//aqui agregamos el cambio al DOM

console.log(`usando .outerHTML.repalce:`,nuevoParrafo);
  
console.groupEnd();
  
            // Atributos y propiedades 
/* 
  La diferencia entre un atributo y una propiedad, es que los atritubos son utilizados unicamente
  al inicio del HTML.
  Las propiedades son como las cosas vivientes y cambiantes que hay dentro del DOM cuando la pagina
  esta viva en el navegador.
*/

let nombre = document.querySelector('#nombre');

console.group(`Atributos y propiedades `);
  console.log(nombre.value = 'angel');
console.groupEnd();


          //ELEMINAR NODOS

          //padre.removeChild(nodoAEliminar);

let nodoAEliminar = document.querySelector('#pais');
let padreDelNodoAEliminar = document.querySelector('.formulario');

padreDelNodoAEliminar.removeChild(nodoAEliminar); //aqui eliminamos el campo de PAIS

            //let referencia = nodoAEliminar.parentElement;

let nodoAEliminar2 = document.querySelector('#nombre');
let padre2 = nodoAEliminar2.parentElement; // esto nos devuelve el ELEMENTO PADRE del nodo a eliminar
console.log(`Nos devuelve el elemento padre del nodo:`,padre2);

            //usando Remove  (NO funciona en Internet Explorer)

let nodoAEliminar3 = document.querySelector('#genero');
nodoAEliminar3.remove();

            //usando replaceChild

let nodoARemplazar = document.querySelector('#edad');
let padreDelNodoARemplazar = nodoARemplazar.parentElement;
console.log(`Este es el padre del elemento a eliminar usando replaceChild`,padreDelNodoARemplazar);

let nuevoNodo = document.createElement('h3');
nuevoNodo.textContent = 'Texto insertado usando replaceChild';

padreDelNodoARemplazar.replaceChild(nuevoNodo, nodoARemplazar);



          //OPERACIONES EN LOTE, aqui modificamos el DOM solo 1 vez y esto lo hace mas eficiente

console.group(`operaciones en lote`);
const nodos = [];

for (let index = 0; index < 100; index++) {
  const nodo = document.createElement('input');
  nodos.push(nodo);
};
console.log(`Tarea de 100 nodos creada en memoria`,nodos);

document.body.append(...nodos); //Asi agregamos de golpe TODOS los nodos creados que estan en memoria;





console.groupEnd();





});