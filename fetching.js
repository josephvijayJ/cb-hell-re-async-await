// fetch('https://restcountries.eu/rest/v2/all')
//   .then((data) => data.json())
//   .then((countries) =>
//     countries
//       .filter((country) => country.population > 200000000)
//       .map((country) => {
//         country.name;
//         console.log(country);
//         // console.log(greater_Population);
//       })
//   );

//Promise.all()
//it takes a array of promises
// countriesinEurope = fetch(
//   'https://restcountries.eu/rest/v2/region/europe'
// ).then((data) => data.json());
// // .then((country) => country.map((country) => country.name));
// // .then((countryname) => console.log(countryname));

// countriesspeakSpanish = fetch('https://restcountries.eu/rest/v2/lang/es').then(
//   (data) => data.json()
// );

// // console.log(countriesinEurope, countriesspeakSpanish);
// //Promise all will fire data at a time.
// Promise.all([countriesinEurope, countriesspeakSpanish]).then((allData) => {
//   const [europeCountries, spanishCountries] = allData;

//   console.log(europeCountries, spanishCountries);
//   const europenames = europeCountries.map((country) => country.name);
//   const spanishnames = spanishCountries.map((country) => country.name);
//   console.log(europenames, spanishnames);
//   const EuroandSpanish = europenames.filter((eurocountry) => {
//     return spanishnames.includes(eurocountry);
//   });
//   console.log(EuroandSpanish);
// });

//ASYNC AWAIT
//async and await works on promise.

// let Ismajor = (age) =>
//   new Promise((resolve, reject) => {
//     if (age >= 18) {
//       resolve('Major');
//     } else {
//       reject('minor');
//     }
//   });

// // Ismajor(21).then((data) => console.log(data));

// async function checkMajor(age) {
//   try {
//     const msg = await Ismajor(age);
//     console.log(msg);
//   } catch (err) {
//     console.log('Minoooooooooooooor');
//   }
// }

// checkMajor(21);
// checkMajor(18);
// checkMajor(13);

//call back hell into async await syntax

let heading = (count) =>
  new Promise((resolve, reject) => {
    if (count > 0) {
      setTimeout(() => {
        document.getElementById('display').innerText = count;
        resolve(count);
      }, 1000);
    } else {
      setTimeout(() => reject('Happy New Year !!!'), 1000);
    }
  });

async function display(count) {
  try {
    await heading(count);
    await heading(--count);
    await heading(--count);
    await heading(--count);
    await heading(--count);
    await heading(--count);
  } catch (err) {
    document.getElementById('display').innerText = err;
  }
}

display(5);

//Async && Await . . . . .

// const eurospanishCountries = async () => {
//   let euro = await fetch('https://restcountries.eu/rest/v2/region/europe');
//   let eurocountries = await euro.json();

//   let spanish = await fetch('https://restcountries.eu/rest/v2/lang/es');
//   let spanishcountries = await spanish.json();
//   console.log(eurocountries, spanishcountries);
//   let europeCountry = eurocountries.map((country) => country.name);
//   let spanishcountry = spanishcountries.map((country) => country.name);
//   let euroAndspanish = europeCountry.filter((euro) => {
//     return spanishcountry.includes(euro);
//   });
//   console.log(euroAndspanish);
// };

// eurospanishCountries();

//Combining promise.all() and async,await

// async function euroandspanishCountries() {
//   let [euro, spanish] = await Promise.all([
//     fetch('https://restcountries.eu/rest/v2/region/europe').then((data) =>
//       data.json()
//     ),
//     fetch('https://restcountries.eu/rest/v2/lang/es').then((data) =>
//       data.json()
//     ),
//   ]);
//   console.log(euro, spanish);
//   let europenames = euro.map((euro) => euro.name);
//   let spanishnames = spanish.map((spanish) => spanish.name);
//   let EuroandSpanish = europenames.filter((europenames) => {
//     return spanishnames.includes(europenames);
//   });
//   console.log(EuroandSpanish);
// }

// euroandspanishCountries();
