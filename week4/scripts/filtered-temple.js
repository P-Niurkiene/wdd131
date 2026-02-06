document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const temples = [
    { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500, imageUrl: "images/aba-nigeria-temple.jpg" },
    { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888, May, 21", area: 74792, imageUrl: "images/manti-temple.jpg" },
    { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015, June, 7", area: 96630, imageUrl: "images/payson-utah-temple.jpg" },
    { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020, May, 2", area: 6861, imageUrl: "images/yigo-guam-temple.webp" },
    { templeName: "Washington D.C.", location: "Kensington, Maryland, United States", dedicated: "1974, November, 19", area: 156558, imageUrl: "images/washington-dc-temple.webp" },
    { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986, January, 10", area: 9600, imageUrl: "images/lima-peru-temple.jpg" },
    { templeName: "Mexico City Mexico", location: "Mexico City, Mexico", dedicated: "1983, December, 2", area: 116642, imageUrl: "images/mexico-city-temple.jpg" },
    { templeName: "Helsinki Finland", location: "Helsinki, Finland", dedicated: "2003, March, 29", area: 16350, imageUrl: "images/helsinki-finland-temple.jpg" },
    { templeName: "Hamilton New Zealand", location: "Hamilton, New Zealand", dedicated: "1955, December, 21", area: 45251, imageUrl: "images/hamilton-new-zealand-temple.jpg" },
    { templeName: "Preston England", location: "Chorley, Lancashire, England", dedicated: "1994, June, 12", area: 69630, imageUrl: "images/preston-temple.jpg" }
];

const cardsContainer = document.getElementById("temple-cards");

function displayTemples(templesToDisplay) {
    cardsContainer.innerHTML = "";

    templesToDisplay.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        const name = document.createElement("h2");
        name.textContent = temple.templeName;


        const locationPara = document.createElement("p");
        locationPara.textContent = `Location: ${temple.location}`;


        const dedicatedPara = document.createElement("p");
        dedicatedPara.textContent = `Dedication: ${temple.dedicated}`;


        const areaPara = document.createElement("p");
        areaPara.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;


        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = `Photo of ${temple.templeName}`;
        img.loading = "lazy";
        img.width = 400;
        img.height = 250;


        card.append(name, locationPara, dedicatedPara, areaPara, img);


        cardsContainer.appendChild(card);
    });
}


displayTemples(temples);

document.getElementById("home").addEventListener("click", () => displayTemples(temples));
document.getElementById("old").addEventListener("click", () => displayTemples(temples.filter(t => parseInt(t.dedicated) < 1900)));
document.getElementById("new").addEventListener("click", () => displayTemples(temples.filter(t => parseInt(t.dedicated) > 2000)));
document.getElementById("large").addEventListener("click", () => displayTemples(temples.filter(t => t.area > 90000)));
document.getElementById("small").addEventListener("click", () => displayTemples(temples.filter(t => t.area < 10000)));

