document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

if (hambutton) {
    hambutton.addEventListener("click", () => {
        mainnav.classList.toggle("show");
        hambutton.classList.toggle("show");
    });
}

const trips = [
    { location: "United Kingdom", date: "2022-10", people: "2 Adults", budget: "1000 Euros", duration: "10 Days", transport: "Flying, and public transport", purpose: "After living in the UK for 18 months we wanted to go back and visit some of the places we loved and also to see London. This was more a trip down memory lane for us and we were able to save some money staying with friends.", imageUrl: "images/london.webp" },
    { location: "Riga, Latvia", date: "2023-02", people: "2 Adults", budget: "300 Euros", duration: "3 Days", transport: "Bus and walking", purpose: "Latvia and Lithuania border each other so traveling between the two countries is quite easy. We found really cheap bus tickets, and because it was off season accommodation was also cheap. This was more of a sightseeing weekend trip, even in winter it was worth it!", imageUrl: "images/riga.webp" },
    { location: "Tallinn, Estonia", date: "2023-03", people: "2 Adults", budget: "300 Euros", duration: "4 Days", transport: "Bus and walking", purpose: "I found crazy cheap tickets and couldn't pass it up! It was also off season so the hotel was right in the city center and discounted also. Tallinn is such a beautiful city with a mix of Medieval and Modern architecture, along with a rich history.", imageUrl: "images/tallinn.webp" },
    { location: "Malta", date: "2024-10", people: "2 Adults", budget: "1200 Euros", duration: "7 Days", transport: "Flying and bus", purpose: "Malta is one country that I fell in love with and is on my list to visit again! This trip was a 'Girls Trip', and this small island offered amazing nature, history, and beaches! The food, the culture, and the atmosphere was unique and beautiful.", imageUrl: "images/sunset-malta.webp" },
    { location: "Helsinki, Finland", date: "2025-07", people: "4 Adults, 1 Infant", budget: "2000 Euros", duration: "10 Days", transport: "Flying and public transport", purpose: "Finland is such a peaceful place even when it is crowded in Summer. There is so much nature and charm to Helsinki and surrounding areas.", imageUrl: "images/helsinki.webp" },
    { location: "Alanya, Turkey", date: "2023-04", people: "2 Adults", budget: "600 Euros", duration: "5 Days", transport: "Organised by Agency", purpose: "This trip was total chance! Certain travel agencies heavily discount trips. This was a cheap relaxing holiday for us, everything was all inclusive.", imageUrl: "images/turkey.webp" },
    { location: "New Zealand", date: "2024-09", people: "2 Adults, 1 Infant", budget: "4000 Euros", duration: "25 Days", transport: "Flying and driving", purpose: "New Zealand is my home country, but because it is far away we don't travel there often. We spent most of our time outdoors enjoying nature and greenery.", imageUrl: "images/new-zealand.webp" }
];

const cardsContainer = document.querySelector(".trips");

function displayTrips(tripsToDisplay) {
    if (!cardsContainer) return;

    cardsContainer.innerHTML = "";

    tripsToDisplay.forEach(trip => {
        const card = document.createElement("div");
        card.classList.add("trip-card");

        const locationHeading = document.createElement("h2");
        locationHeading.textContent = trip.location;

        const img = document.createElement("img");
        img.src = trip.imageUrl;
        img.alt = `Photo of ${trip.location}`;
        img.loading = "lazy";

        const details = document.createElement("div");
        details.classList.add("trip-details");
        details.style.display = "none";

        details.innerHTML = `
            <p><strong>Date:</strong> ${trip.date}</p>
            <p><strong>Travelers:</strong> ${trip.people}</p>
            <p><strong>Budget:</strong> ${trip.budget}</p>
            <p><strong>Duration:</strong> ${trip.duration}</p>
            <p><strong>Transport:</strong> ${trip.transport}</p>
            <p><strong>Purpose:</strong> ${trip.purpose}</p>
        `;

        img.addEventListener("click", () => {
            details.style.display = details.style.display === "none" ? "block" : "none";
        });

        card.append(locationHeading, img, details);
        cardsContainer.appendChild(card);
    });
}

const sortMenu = document.querySelector("#sortTrips");
if (sortMenu) {
    const savedSort = localStorage.getItem("tripSort");
    if (savedSort) sortMenu.value = savedSort;

    sortMenu.addEventListener("change", () => {
        localStorage.setItem("tripSort", sortMenu.value);
        sortAndDisplay();
    });

    function sortAndDisplay() {
        let sortedTrips = [...trips];
        switch (sortMenu.value) {
            case "newest":
                sortedTrips.sort((a, b) => b.date.localeCompare(a.date));
                break;
            case "oldest":
                sortedTrips.sort((a, b) => a.date.localeCompare(b.date));
                break;
            case "alpha":
                sortedTrips.sort((a, b) => a.location.localeCompare(b.location));
                break;
        }
        displayTrips(sortedTrips);
    }

    sortAndDisplay();
}

const sortNewMenu = document.querySelector("#sortNewTrips");
if (sortNewMenu) {
    const savedNewSort = localStorage.getItem("newTripSort");
    if (savedNewSort) sortNewMenu.value = savedNewSort;

    sortNewMenu.addEventListener("change", () => {
        localStorage.setItem("newTripSort", sortNewMenu.value);
        sortFutureTrips();
    });

    function sortFutureTrips() {
        const tripCards = Array.from(document.querySelectorAll(".new-trips .trip-card"));
        switch (sortNewMenu.value) {
            case "newest":
                tripCards.sort((a, b) => b.querySelector("p strong").nextSibling.textContent.localeCompare(
                    a.querySelector("p strong").nextSibling.textContent));
                break;
            case "oldest":
                tripCards.sort((a, b) => a.querySelector("p strong").nextSibling.textContent.localeCompare(
                    b.querySelector("p strong").nextSibling.textContent));
                break;
            case "alpha":
                tripCards.sort((a, b) => a.querySelector("h3").textContent.localeCompare(b.querySelector("h3").textContent));
                break;
        }
        const container = document.querySelector(".new-trips");
        container.innerHTML = "";
        tripCards.forEach(card => container.appendChild(card));
    }

    sortFutureTrips();
}

let formVisits = parseInt(localStorage.getItem("formVisits")) || 0;

formVisits++;

localStorage.setItem("formVisits", formVisits);

const message = document.getElementById("visitMessage");
message.textContent = `You have successfully submitted the form ${formVisits} time${formVisits > 1 ? "s" : ""}.`;


