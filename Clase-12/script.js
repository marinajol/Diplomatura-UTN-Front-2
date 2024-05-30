console.log('hola mundo')

/* O P E R A D O R E S   L Ó G I C O S  

!: NOT o negación
nos da el valor booleano opuesto al dato que estoy negando

*/

console.log(!true) /* false */
console.log(!'') /* true        porque comillas vacías es falsy entonces la negación es true */
console.log(!'pepe') /* false   porque un string es truthy entonces la negación es false */
console.log(!null) /* true      porque null es falsy */

/* || OR o O
sirve para seleccionar 
si el primer valor es verdadero, va a seleccionar el primer valor
si el primer valor es un valor falsy, siempre va a seleccionar el 2do valor
si hay un tercer dato, primero evalúa los primeros dos y luego el resultado de eso, con el 3ro 
*/

console.log('' || 'pepe') /* 'pepe'     porque '' es falsy */
console.log('' || 0) /* 0               si ambos son falsos, igual selecciona el 2do*/
console.log('pepe' || '' || 10) /* 'pepe'   porque 'pepe' es truthy     truthy-falsy-truthy*/
console.log(0 || 'pepe' || 'ana') /* 'pepe'     falsy-truthy-truthy    primero elige a 'pepe' porque 0 es falsy y si el primero es falsy va a devolver el 2do, Una vez elegido 'pepe' lo compara con 'ana' y tmb se queda con 'pepe' porque está primero y es truthy */
console.log(0 || false || 'pepe' ) /* 'pepe'    falsy-falsy-truthy      el primero es falsy entonces elige al segundo, queda falsy, entonces vuelve a elegir el 2do
 */






