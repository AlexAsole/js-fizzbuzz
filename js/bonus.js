// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
var numbers = document.getElementById('numbers');
var number = 0;   //numero base a cui addizionero 1 in maniera ciclica, fino a 100
for (var i = 0; i < 100; i++) {   //ciclo di 100 operazioni
  number += 1;
  if (number % 3 === 0 || number % 5 === 0) {   //se è divisibile per 3 O 5 allora controlla:
    if (number % 3 === 0 && number % 5 === 0){  //se è divisibile per 3 E 5
      numbers.innerHTML += 'FizzBuzz' + '</br>'
    } else if (number % 3 === 0){   //se è divisibile SOLO per 3
      numbers.innerHTML += 'Fizz' + '</br>'
    } else if (number % 5 === 0) {  //se è divisibile SOLO per 5
      numbers.innerHTML += 'Buzz' + '</br>'
    }
  } else {  //se non è divisibile per nessuno dei due
    numbers.innerHTML += number + '</br>'
  }
}
