fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => {
        let countriesContainer = document.getElementById("countriesContainer");
        let cards = '<div class="row justify-content-center">';
        
        let selectC = document.getElementById("Country");
        let options = `<option value="Select Country" selected>Select Country</option>`;
        data.forEach(element => {
            options += `<option value="${element.name.common}">${element.name.common}</option>`;

            cards += `
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 country-card" data-name="${element.name.common}">
                    <img src="${element.flags.png}" class="img-fluid" alt="Flag of ${element.name.common}">
                    <h3>${element.name.common}</h3>
                    <p><strong>Capital:</strong> ${element.capital ? element.capital[0] : "N/A"}</p>
                    <p><strong>Region:</strong> ${element.region}</p>
                    <p><strong>Population:</strong> ${element.population.toLocaleString()}</p>
                    <p><strong>Location:</strong> <a href="${element.maps.googleMaps}" target="_blank">Click here to visit Map</a></p>
                </div>
            `;
        });
        
        countriesContainer.innerHTML = cards + '</div>';
        selectC.innerHTML = options;
    });

document.getElementById("txtSearchValue").addEventListener('input', filterCountries);

function filterCountries() {
    let searchValue = document.getElementById("txtSearchValue").value.toLowerCase();
    let countryCards = document.querySelectorAll('.country-card');
    
    countryCards.forEach(card => {
        let countryName = card.getAttribute('data-name').toLowerCase();
        if (countryName.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

document.getElementById("Country").addEventListener('change', selectCountry);

function searchCountry() {
    let searchValue = document.getElementById("txtSearchValue").value;
    displayCountryDetails(searchValue);
}

function displayCountryDetails(searchValue) {
    let capital = document.getElementById("capital");
    let name = document.getElementById("name");
    let region = document.getElementById("region");
    let population = document.getElementById("population");
    let location = document.getElementById("location");
    let img = document.getElementById("img");

    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
        .then(res => res.json())
        .then(data => {
            if (data && data.length > 0) {
                let country = data[0];
                capital.innerText = "Capital : " + (country.capital ? country.capital[0] : "N/A");
                name.innerText = country.name.common;
                region.innerText = "Region : " + country.region;
                population.innerText = "Population : " + country.population.toLocaleString();
                img.innerHTML = `<img src="${country.flags.png}" alt="Flag of ${country.name.common}">`;
                location.innerHTML = "Location : <a href='" + country.maps.googleMaps + "' target='_blank'>Click Here to visit Map</a>";
            }
        })
        .catch(error => {
            console.error("Error fetching country data:", error);
        });
}

document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("Country").value !== "Select Country") {
        selectCountry();
    }
});
