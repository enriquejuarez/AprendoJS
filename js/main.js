function showCode(elementId){
  document.getElementById(elementId).classList.remove('invisible')
}

function convertUpperCase(text){
  document.getElementById('labelUpperCase').innerHTML = text.toUpperCase();
}

function convertLowerCase(text){
  document.getElementById('labelLowerCase').innerHTML = text.toLowerCase();
}

function getLength(text){
  document.getElementById('labelLengthText').innerHTML += ' Longitud: ' + text.length;
}

function getTypeOf(text){
  document.getElementById('labelTypeOf').innerHTML += ' Tipo: ' + typeof text;
}

function destructuring(){
/** Desestructurar objetos **/
  let person = {
    name: 'Carlos',
    surname: 'Juárez',
    age: 31,
    city: 'Xalapa',
    country: 'México',
    personPlus: {
      street: 'Calle 45',
      number: 4,
      size: 2
    }
  }
  let { name } = person;
  let { street } = person.personPlus;
  console.log('Resultado de la función destructuring() para desestructurar un objeto')
  console.log(name);
  console.log(street);
}

function spredOperator(){
  let person = {
    name: 'Carlos',
    surname: 'Juárez',
    age: 31,
    city: 'Xalapa',
    country: 'México'
  }
  let personTwo = person; //En este caso se genera una referencia
  let personThree = { ...person, nickName: 'caenjuji' }; //spread operator para asignar valores del objeto sin referencia
  personTwo.name = 'Enrique';
  personThree.name = 'Mario';

  console.log(person);
  console.log(personTwo);
  console.log(personThree);
}

const arrowFunction = () => {
  /* Funciones de flecha */
  console.log('Soy una función de flecha');
}

function cycleFor(){
  /* Uso del ciclo for */
  const DAYS_YEAR = 365;
  for (let index = 0; index <= DAYS_YEAR; index++) {
    console.log(index);
  }
}

function cycleWhile(){
  let counter = 0;
  while (counter <= 50) {
    console.log(counter);
    counter++;
  }
}

function useDebugger(){
  /* Uso de debugger para depurar código */
  let value = '10';
  let number = 10;
  console.log(value == number);
  console.log('Antes del break point')
  debugger
  console.log('Después del break point')
}

function useSwitch(){
  let sign = prompt('¿Cuál es tu signo?');
  switch (sign) {
    case 'acuario':
      console.log('Eres una persona con estas cualidaddes...');
      break;
    case 'leo':
      console.log('Eres una persona con estas cualidaddes...');
      break;
    case 'cancer':
    case 'cáncer':
      console.log('Eres una persona con estas cualidaddes...');
    break;  
    default:
      console.log('No hay datos de tu signo aún');
      break;
  }
}

function useArray(){
  /* Los arreglos pueden ser de diferentes tipos de datos, hacen uso de [] */
  let ana = {
    name: 'Ana María',
    age: 25,
    country: 'Mexico'
  }
  let victor = {
    name: 'Víctor Gómez',
    age: 35,
    country: 'Mexico'
  }
  let rosa = {
    name: 'Rosa Gómez',
    age: 17,
    country: 'Brasil'
  }

  let persons = [ana, victor, rosa];

  console.log('Soy un arreglo de objetos', persons, ' Con numero de personas: ', persons.length);
}

function filterArray(){
  /* La función filter() devuelve un nuevo array con los elementos que cumplan con la condición dada */
  let persons = [
    {
      name: 'Berenice',
      height: 1.8
    },
    {
      name: 'Antonio',
      height: 1.7
    },
    {
      name: 'Teresa',
      height: 1.4
    },
    {
      name: 'Gabriela',
      height: 1.8
    }
  ];

  console.log('Personas altas: ', persons.filter((person) => person.height > 1.6));
}

function mapArray(){
  /* La función map() modfica los valores del elemento original */
  let persons = [
    {
      name: 'Berenice',
      height: 1.8
    },
    {
      name: 'Antonio',
      height: 1.7
    },
    {
      name: 'Teresa',
      height: 1.4
    },
    {
      name: 'Gabriela',
      height: 1.8
    }
  ];

  let personsPlus = persons.map(person => {
    // person.height *= 100;
    return {
      ...person,
      height: person.height * 100
    };
  });

  console.log('Soy el arreglo original', persons);
  console.log('Soy el arreglo con la altura aumentada', personsPlus);
}

function useReduce(){
  /* La función reduce() reduce un array a un solo valor */
  let persons = [
    {
      name: 'Berenice',
      height: 1.8,
      books: 10
    },
    {
      name: 'Antonio',
      height: 1.7,
      books: 8
    },
    {
      name: 'Teresa',
      height: 1.4,
      books: 2
    },
    {
      name: 'Gabriela',
      height: 1.8,
      books: 18
    }
  ];

  console.log('En total de libros es: ', persons.reduce((count, person) => {
    return count + person.books;
  }, 0));
}

