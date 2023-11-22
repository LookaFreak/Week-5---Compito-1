/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/



// function crazySum(num1, num2){
//     if (num1===num2) {
//         return (num1 + num2) *3;
//     } else {
//         return num1 + num2;
//     }
//     }
 
//     console.log(crazySum(5, 10));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

// function boundary(numero) {
//     if ((numero >= 20 && numero <= 100) || numero === 400) {
//         return true;
//     } else {
//         return false;
//     }
//     }

 
//     console.log(boundary(10));
//     console.log(boundary(50));
//     console.log(boundary(400));
//     console.log(boundary(200));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

// function reverseString(stringa) {
//     let stringaInvertita = "";
  
//     for (let i = stringa.length - 1; i >= 0; i--) {
//       stringaInvertita += stringa[i];
//     }
  
//     return stringaInvertita;
//   }
  
//   console.log(reverseString("roberta")); 
  

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(stringa) {
    let parole = stringa.split(" ");
     
    for (let i = 0; i < parole.length; i++) {
      parole[i] = parole[i][0].toUpperCase() + parole[i].substring(1);
    }
    
    return parole.join(" ");
  }
  
  console.log(upperFirst("hater make me famous"));
  

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

// function giveMeRandom(n) {
//     let result = [];

//     for (let i = 0; i < n; i++) {
//         let randomNumber = Math.floor(Math.random() * 11);
//         result.push(randomNumber);
//     }

//     return result;
// }

// console.log(giveMeRandom(5));

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

// function area(l1, l2) {
//     return l1 * l2;
//   }
  
//   console.log(area(5, 8));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

// function crazyDiff(numero) {
//     let differenza = Math.abs(numero - 19);
    
//     if (differenza > 19) {
//       return differenza * 3;
//     }
    
//     return differenza;
//   }
  
//   console.log(crazyDiff(50)); 
//   console.log(crazyDiff(120)); 
//     console.log(crazyDiff(240));   
  
  

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/
// function codify(stringa) {
//     if (stringa.indexOf("code") === 0) {
//       return stringa;
//     } else {
//       return "code" + stringa;
//     }
//   }
  
//   console.log(codify("hello"));


/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

// function check3and7(numero) {
//     if (numero % 3 === 0 || numero % 7 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(check3and7(5)); //Output: falso perché non è multiplo di 3 o 7

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

// function cutString(stringa) {
//     return stringa.slice(1, -1);
// }

// console.log(cutString("Haters Make Me Famous"));