//Se solicita numero
const numero = parseInt ( prompt ( "Ingrese numero... 🧐 " ) );
//Rango de numeros permitidos
if ( numero <= 20 && numero > 0 ) {
//
const verificarNumero = ( num ) => {
    //Parametro de multiplicacion
     for ( let i = 1; i <= num; i++ ) {
         console.log (`${ num } x ${ i } = ${ num * i }`);
     }
     //Parametro de Factorial
     for ( let i = 1; i <= num; i++ ) {
         console.log (` ${'factorial de'} ${ num } x ${ i } = ${ num * i } ` );
     }    
};
//
verificarNumero (numero);
}
//Fuera de Rango
else {
    console.log ( '😵 Numero fuera de rango 😵' )
}