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
  















});