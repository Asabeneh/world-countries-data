
/*=== GLOBAL VARIABLES ===*/
const countriesWrapper = document.querySelector ('.countries-wrapper');
const subtitle = document.querySelector ('.subtitle');
const searchInput = document.querySelector ('#search-input');
const buttons = document.querySelector ('.buttons');

buttons.addEventListener ('click', e => {
  console.log (e.target.className);
  alert (e.target.className);
});

/*=== Filter function === */
const filterCountries = (arr, search) => {
  const filteredCountries = arr.filter (country => {
    let {name, capital, languages} = country;
    let isName = name.toLowerCase ().includes (search);
    let isCapital = capital.toLowerCase ().includes (search);
    let isLanguages = languages.join ().toLowerCase ().includes (search);

    return isName || isCapital || isLanguages;
  });
  let result = search == '' ? arr : filteredCountries;
  return result;
};

/*=== Event listener to get search input === */

searchInput.addEventListener ('input', e => {
  let searchTerm = e.target.value.toLowerCase ();
  showCountries (filterCountries (countries, searchTerm));
});

const createContent = content => {
  const {name, capital, languages, population, flag} = content;
  return `<div>
  <img src="${flag}" />
  <p>${name}</p>
  <p>${capital}</p>
  <p>${languages.join (', ')}</p>
  <p>${population.toLocaleString ()}</p>
</div>`;
};

subtitle.textContent = `Currently, we have ${countries.length} countries`;

const showCountries = arr => {
  let contents = '';
  countriesWrapper.innerHTML = '';
  arr.forEach ((country, i) => {
    contents += createContent (country);
  });
  countriesWrapper.innerHTML = contents;
};

showCountries (filterCountries (countries, searchInput.value));
