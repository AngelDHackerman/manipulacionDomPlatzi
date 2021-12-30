'use strict';
window.addEventListener('load', () => { 

const container = document.querySelector('p.parrafo1');
const h3 = document.createElement('h3');
const texto = document.createTextNode('Texto del h3 creado con JS');

          // usando createElement & createTextNode

h3.append(texto);
container.append(h3);

container.append('hola 2', document.createElement('div'));// hola 2 es un texto agregado directamente, NO valido para internet explorer

          // document.insertBefore(node, referencia);

          // node.outerHTMO (leer) & node.innerHTML (escribir)


















});