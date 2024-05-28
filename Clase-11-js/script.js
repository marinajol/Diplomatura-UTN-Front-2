console.log('hola mundo')

if(edad > 18){
    console.log('soy mayor de edad')
}

/* T I P O S   D E   D A T O S   E N   J A V A S C R I P T

Hay dos categorías de datos: primitivos y objeto

Datos primitivos:
Number ->   números 1 2 3 4
            3.14 flotante (float)
            NaN es un dato númerico 
            Infinity
String -> textos, párrafos, nombres, van siempre entre comillas, simples '', dobles "" o invertidas
Boolean -> valores TRUE or FALSE
Null -> ausencia o nulidad de un dato
Undefined -> no hay un dato definido
(Symbol)

*/

/* Ejemplo del cartero
estado_de_respuesta

llego, atienden y no quieren recibir la carta: false
llego, atienden y la quieren recibir: true
Soy el mesajero y no llego, me extravío en el viaje: undefined
Llego a la casa y no me atienden: null

Acepta los terminos y condiciones?
si: true
no: false
no le pregunte: undefined
pregunte y no tuve respuesta: null
*/

/* C O N S T R U C T O R E S 
transforma un dato en string
String(dato)    ejemplo String(8)
Number(true) = 1
*/

/* O P E R A D O R E S   A R I T M E T I C O S

SIEMPRE DEVUELVE STRINGS
+ Concatenación --> 'hola' + 'mundo' = 'holamundo'
                    'hola' + 1 = 'hola1'    transforma el número en string
                    la concatenación ocurre cuando uno de los datos es un string

Si hago:
'hola' + 1
proceso interno= 'hola' + String(1)
proceso interno= 'hola' + '1' = 'hola1'

SIEMPRE DEVUELVEN NÚMEROS
+ Suma      1 + true = 2 (porque true en binario es 1)
- Resta
* Multiplicación
/ División
% Resto de la división o Módulo

*/

typeof(1+1) /* me devuelve el tipo de dato */

/* 
undefined + 1 = NaN lo utiliza javascript cuando no puede resolver una operación, ninguno es string asi que no concatena, es una suma.
undefined + 1
proceso interno: Number(undefined) + 2
proceso interno: NaN + 1
Si alguno de los dos datos es un Nan, el resultado final es NaN


*/

typeof(null) = Object /* si fuera un objeto podriamos ver las propiedades */
Number(null) = 0 /* el formato numérico de null es 0 */
Number(true) = 1 /* el formato numérico de true es 1 */
Number(false) = 0 /* el formato numérico de false es 0 */
null + true = 1 /* porque el valor numérico de null es 0 y el de true es 1 */
Number('pepe') = NaN /* no tiene valor numérico ese string entonces no lo puede transformar */
Number('a') = NaN /* no tiene valor numérico ese string entonces no lo puede transformar */

3 - '3' = 0 /* el menos siempre devuelve un número */
1 - 'pepe' = NaN

0.1 + 0.2 = 0.30000000000000004

(0.1 + 0.2).toFixed(2) /* Number of digits after the decimal point. Must be in the range 0 - 20, inclusive, returns a string representing a number in fixed-point notation. */

/* F A L S Y  O  T R U T H Y
todos los datos que aprendimos hasta ahora se pueden enmarcar en valores verdaderos o en falsos

los verdaderos son infinitos

los falsos:
0
-0
''
false
null
undefined
Nan

son valores que son considerados false sin ser el false boolean
aquellos que cuando transformo en booleano me van a dar false

*/

Boolean(-0)= false
Boolean(8)= true
Boolean(null)= false

/* C O M P A R A D O R E S 
siempre devuelven booleanos

== si un dato es igual a otro   solo compara valor, no tipo de dato
=== estricta igualdad           compara igualdad de valor y de tipo de dato
!= diferencia
!== estricta diferencia
> mayor
< menor
>= meyor igual
<= menor igual
*/

1 == '1' /* es true porque la comparación no es estricta, el valor numérico de '1' es 1 */
23 == '23' /* también es verdadero */
1 == true /* es true */
0 == null /* es false nulo no es igual a ningún dato */
/* NaN == NaN es false porque NaN no puede ser comparado a ningún dato */

isNaN(8) /* false - función nativa de javascript, nos devuelve true o false de si el dato que le pasamos es NaN,va a dar true todo lo que tenga valor numérico

isNaN(null)=false */

isNaN('pepe') = true

isNaN(null) /* SI BIEN NULO NUMÉRICAMENTE REPRESENTA 0 ES UNA EXCEPCIÓN DEL LENGUAJE QUE NULO SOLO ES IGUAL A SI MISMO Y A UNDEFINED */
false
isNaN(NaN)
true
isNaN('pepe')
true
isNaN(undefined)
true

'a' == 'A'
false /* JS es case sensitive */

'a' > 'b'
false
'a' < 'b'
true /* porque se maneja la comparación con código ascii */