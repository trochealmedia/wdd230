const requestURLspotlight = 'https://trochealmedia.github.io/wdd230/chamber_07/json/companies.json';
const spotlight = document.querySelector('.spotlight');

fetch(requestURLspotlight)
  .then(function (response) {
    return response.json();
  })
.then(function (jsonObject){
    const companies=jsonObject["companies"];
    const VIPMembers=[];
    companies.forEach((company)=>{if (company.membership==="Silver Membership"||company.membership==="Gold Membership"){VIPMembers.push(companies.indexOf(company))}});
    function randomIndex (list){ return list[Math.floor(Math.random()*list.length)]};
    displayContent(companies[randomIndex])
});

function displayContent(company){
    let section=document.createElement("section");
    let name=document.createElement("h3");
    let phone=document.createElement("p");
    let website=document.createElement("p");
    let logo=document.createElement("img");

    name.innerHTML=`${company.name}`;
    phone.innerHTML=`${company.telf}`;
    website.innerHTML=`<a href="${company.website}" target="_blank">${company.website}</a>`;
    logo.setAttribute("src",company.logourl);
    logo.setAttribute("alt",`${company.name}'s logo`);
    logo.setAttribute('loading', 'lazy');
    section.appendChild(name);
    section.appendChild(logo);
    section.appendChild(phone);
    section.appendChild(website);
    spotlight.appendChild(section);
};

// const requestURL = 'https://trochealmedia.github.io/wdd230/chamber_07/json/companies.json';
// const spotlight = document.querySelector('.spotlight');

// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject);
//     const companies=jsonObject["companies"];
//     const VIPMembers=[];
//     companies.forEach((company)=>{if (company.membership==="Silver Membership"||company.membership==="Gold Membership"){VIPMembers.push(companies.indexOf(company))}});
//     function randomIndex (list){ return list[Math.floor(Math.random()*list.length)]};
//     companies.forEach(displayCompanies(companies[randomIndex]));
//   });

//   function displayCompanies(companie){
//     // Create elements to add to the document  
//   let card=document.createElement("section");
//   let portrait=document.createElement("img");
//   let heading=document.createElement("h2");
//   let paragraph=document.createElement("p");
//   let paragraph2=document.createElement("p");
//   let website=document.createElement("p");
//   let paragraph4=document.createElement("p");

//    heading.textContent=`${companie.name}`;
//    paragraph.textContent=`Address: ${companie.location}`;
//    paragraph2.textContent=`Phone Number: ${companie.telf}`;
//    website.innerHTML=`Website: <a href="${companie.website}" target="_blank">${companie.website}</a>`;
//    paragraph4.textContent=`Membership: ${companie.membership}`;

//    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
//    portrait.setAttribute('src', companie.logourl);
//    portrait.setAttribute('alt', `Portait of ${companie.name}`);
//    portrait.setAttribute('loading','lazy');

//    // Add/append the section(card) with the h2 element
//    card.appendChild(portrait);
//    card.appendChild(heading);
//    card.appendChild(paragraph);
//    card.appendChild(paragraph2);
//    card.appendChild(website);
//    card.appendChild(paragraph4);
   
   

//    // Add/append the existing HTML div with the cards class with the section(card)
//    document.querySelector('div.spotlight').appendChild(spotlight);
// }