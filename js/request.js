const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
const PLANET_URL = 'planets/:id';

function getPersonAsynchronous(id){
  /* Ejemplo de comportamiento asincrono */
  axios.get(`${API_URL}${PEOPLE_URL.replace(':id', id)}`)
  .then(function (response) {
    // handle success
    let data = response.data;
    console.log(`Hola mi nombre es ${data.name}`);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

function getPersonSynchronous(id, callback){
  /* Ejemplo de comportamiento sincrono, cuídado con callback hell */
  axios.get(`${API_URL}${PEOPLE_URL.replace(':id', id)}`)
  .then(function (response) {
    // handle success
    let data = response.data;
    console.log(`Hola mi nombre es ${data.name}`);
    if (callback) {
      callback();
    }
  })
  .catch(function (error) {
    // handle error
    console.log('Sucedió un error: ', error);
  })
  .then(function () {
    // always executed
  });
}
/* Descomentar para probar funcionalidad con callback */
// getPersonSynchronous(1, function(){
//   getPersonSynchronous(2, function(){
//     getPersonSynchronous(3, function(){
//       getPersonSynchronous(4)
//     })
//   })
// })

function newPromise(){
  return new Promise((resolve, reject) => {
    resolve('success')
    reject('error')
  })
}
// newPromise()
// .then((value) => console.log('Caso de exitoso', value))
// .catch((err) => console.log('Ocurrió un error', err))

function getPlanetsAsynchronous(id){
  /* Ejemplo de comportamiento asincrono, uso JQuery */
  $.get(`${API_URL}${PLANET_URL.replace(':id', id)}`, function( data ) {
    console.log(data);
  })
}

function getPlanetsPromise(id){
  /* Ejemplo de comportamiento sincrono, uso JQuery */
  return new Promise((resolve, reject) => {
    $.get(`${API_URL}${PLANET_URL.replace(':id', id)}`, function( data ) {
      resolve(data);
    })
    .fail((err) => {
      reject(err);
    })
  })
}
/* Promesas encadenadas - tipo sincrono - resultado en el orden solicitado */
// getPlanetsPromise(1)
// .then((data) => {
//   console.log(data);
//   return getPlanetsPromise(2)
// })
// .then((data1) => {
//   console.log(data1);
//   return getPlanetsPromise(3)
// })
// .then((data) => {
//   console.log(data);
// })
// .catch((err) => {
//   console.log(err);
// })

/* Llamada de promesas en paralelo, espera que todas las promesas se resuelvan para proseguir */
// let ids = [1, 2, 3, 4, 5];
// let promises = ids.map(id => getPlanetsPromise(id));
// Promise
//   .all(promises)
//   .then(planet => console.log(planet))
//   .catch(err => console.log('Se generó un error', err))

async function asyncAwait(){
  /* Uso de async y await para llamados asincronos */
  let ids = [1, 2, 3, 4, 5];
  let promises = ids.map(id => getPlanetsPromise(id));
  try {
    let planets = await Promise.all(promises);
    console.log(planets);
  } catch (error) {
    console.log(error);
  }
}

const person = {
  name: 'Carlos',
  lastName: 'Juarez'
}

function sayHello(){
  console.log(`Hola mi nombre es: ${this.name}`);
}
const sayHelloNow = sayHello.bind(person);