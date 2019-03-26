/*=== GLOBAL VARIABLES ===*/
const countriesWrapper = document.querySelector ('.countries-wrapper');
const subtitle = document.querySelector ('.subtitle');
const searchInput = document.querySelector ('#search-input');

/*=== Filter function === */
const filterCountries = (arr, search) => {
  const filteredCountries = arr.filter (country => {
    let {name, capital, languages} = country;
    return name.toLowerCase ().includes (search);
  });
  let result = search == '' ? arr : filteredCountries;
  return result;
};

/*=== Event listener to get search input === */

searchInput.addEventListener ('input', e => {
  let searchTerm = e.target.value.toLowerCase ();
  showCountries (filterCountries (countries, searchTerm));
});

subtitle.textContent = `Currently, we have ${countries.length} countries`;
const showCountries = arr => {
  countriesWrapper.innerHTML = '';
  arr.forEach ((country, i) => {
    const {name, capital, population, flag, languages, currency} = country;
    const countryDiv = document.createElement ('div');
    let namePara = document.createElement ('p');
    let capitalPara = document.createElement ('p');
    let populationPara = document.createElement ('p');
    let flagImage = document.createElement ('img');
    let languagesPara = document.createElement ('p');
    namePara.textContent = name;
    capitalPara.textContent = capital;
    populationPara.textContent = population;
    flagImage.src = flag;
    languagesPara.textContent = languages;
    countryDiv.appendChild (flagImage);
    countryDiv.appendChild (namePara);
    countryDiv.appendChild (capitalPara);
    countryDiv.appendChild (populationPara);
    countryDiv.appendChild (languagesPara);
    countriesWrapper.appendChild (countryDiv);
  });
};

showCountries (filterCountries (countries, searchInput.value));
