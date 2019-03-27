const countriesList = {
  elements: {
    countriesWrapper: document.querySelector ('.countries-wrapper'),
    subtitle: document.querySelector ('.subtitle'),
    searchInput: document.querySelector ('#search-input'),
    buttons: document.querySelector ('.buttons'),
  },
  createContent: function (content) {
    const {name, capital, languages, population, flag} = content;
    return `<div>
  <img src="${flag}" />
  <p>${name}</p>
  <p>${capital}</p>
  <p>${languages.join (', ')}</p>
  <p>${population.toLocaleString ()}</p>
</div>`;
  },
  filterCountries: function (arr, search) {
    const filteredCountries = arr.filter (country => {
      let {name, capital, languages} = country;
      let isName = name.toLowerCase ().includes (search);
      let isCapital = capital.toLowerCase ().includes (search);
      let isLanguages = languages.join ().toLowerCase ().includes (search);

      return isName || isCapital || isLanguages;
    });
    let result = search == '' ? arr : filteredCountries;
    return result;
  },
  showCountries: function (arr) {
    let contents = '';
    countriesWrapper.innerHTML = '';
    arr.forEach ((country, i) => {
      contents += countriesList.createContent (country);
    });
    countriesWrapper.innerHTML = contents;
  },
};

let {countriesWrapper, subtitle, searchInput, buttons} = countriesList.elements;
const {createContent, filterCountries, showCountries} = countriesList;
buttons.addEventListener ('click', e => {
  console.log (e.target.className);
  alert (e.target.className);
});

/*=== Event listener to get search input === */
searchInput.addEventListener ('input', e => {
  let searchTerm = e.target.value.toLowerCase ();
  showCountries (filterCountries (countries, searchTerm));
});

subtitle.textContent = `Currently, we have ${countries.length} countries`;
showCountries (filterCountries (countries, searchInput.value));
