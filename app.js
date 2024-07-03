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


   
   let img =  document.getElementById("img");

    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
    .then(res=>res.json())
    .then(data =>{

        data.forEach(obj=>{
            capital.innerText = "Capital : " + obj.capital;
            name.innerText = obj.name.common;
            region.innerText = "Region : "+ obj.region;
            population.innerText = "population : " + obj.population;
     
            img.innerHTML=`<img src="${obj.flags.png}" alt="">`
        })    
    })
}
function selectCountry(){
    let searchValue=document.getElementById("Country").value;

    let capital = document.getElementById("capital");
   let name = document.getElementById("name");
   let region = document.getElementById("region");
   let population = document.getElementById("population");


   
   let img =  document.getElementById("img");

    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
    .then(res=>res.json())
    .then(data =>{

        data.forEach(obj=>{
            capital.innerText = "Capital : " + obj.capital;
            name.innerText = obj.name.common;
            region.innerText = "Region : "+ obj.region;
            population.innerText = "population : " + obj.population;
     
            img.innerHTML=`<img src="${obj.flags.png}" alt="">`
        })    
    })
}
