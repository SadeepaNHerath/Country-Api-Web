fetch("https://restcountries.com/v3.1/all")
.then(res=>res.json())
.then(data=>{
    let selectC=document.getElementById("Country");
    let options=`<option value="Select Country" selected>Select Country</option>`;
    
    data.forEach(element => {
        options+=`<option value="${element.name.common}">${element.name.common}</td></option>`
    });

    selectC.innerHTML=options;
})


function searchCountry(){
    let searchValue=document.getElementById("txtSearchValue").value;

    let capital = document.getElementById("capital");
    let name = document.getElementById("name");
    let region = document.getElementById("region");
    let population = document.getElementById("population");
    let location = document.getElementById("location");
 
    let img =  document.getElementById("img");
 
     fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
     .then(res=>res.json())
     .then(data =>{
 
         data.forEach(obj=>{
             capital.innerText = "Capital : " + obj.capital;
             name.innerText = obj.name.common;
             region.innerText = "Region : "+ obj.region;
             population.innerText = "population : " + obj.population;
             img.innerHTML=`<img src="${obj.flags.png}" alt="">`;
             location.innerHTML = "Location : " + `<a href="${obj.maps.googleMaps}"><h3>Click Here to visit Map </h3> </a>`;
         })    
     })
}
function selectCountry(){
    let searchValue=document.getElementById("Country").value;

    let capital = document.getElementById("capital");
   let name = document.getElementById("name");
   let region = document.getElementById("region");
   let population = document.getElementById("population");
   let location = document.getElementById("location");

   let img =  document.getElementById("img");

    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
    .then(res=>res.json())
    .then(data =>{

        data.forEach(obj=>{
            capital.innerText = "Capital : " + obj.capital;
            name.innerText = obj.name.common;
            region.innerText = "Region : "+ obj.region;
            population.innerText = "population : " + obj.population;
            img.innerHTML=`<img src="${obj.flags.png}" alt="">`;
            location.innerHTML = "Location : " + `<a href="${obj.maps.googleMaps}"><h3>Click Here to visit Map </h3> </a>`;
     
        })    
    })
}

fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => {
        let countriesContainer = document.getElementById("countriesContainer");
        let cards = '<div class="row justify-content-center">';
        data.forEach((element, index) => {
            cards += `
                <div class="col-lg-2 col-md-3 col-sm-4 col-6 country-card">
                    <img src="${element.flags.png}" class="img-fluid" alt="Flag of ${element.name.common}">
                    <h2>${element.name.common}</h2>
                </div>
            `;

            if ((index + 1) % 5 === 0) {
                cards += '</div><div class="row justify-content-center">';
            }
        });
        cards += '</div>';
        countriesContainer.innerHTML = cards;
    });
