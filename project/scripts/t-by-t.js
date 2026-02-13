document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

if (hambutton) {
    hambutton.addEventListener("click", () => {
        mainnav.classList.toggle("show");
        hambutton.classList.toggle("show");
    });
}


const trips = [
    { location: "United Kingdom", date: "October 2022", people: "2 Adults", budget: "1000 Euros", duration: "10 Days", transport: "Flying, and public transport", purpose: "After living in the UK for 18 months we wanted to go back and vist some of the places we loved and also to see London. This was more a trip down memory line for us and we were able to save some money stayig with friends.", imageUrl: "images/london.webp" },
    { location: "Riga, Lativa", date: "February 2023", people: "2 Adults", budget: "300 Euros", duration: "3 Days", transport: "Bus and walking", purpose: "Lativa and Lithuania boarder each other so traveling between the two countries is quite easy. We were able to find really cheap bus tickets, and because it was off season accomidation was also cheap. This was more of a sight seeing weekend trip, and eben in witer was worth looking at!", imageUrl: "images/riga.webp" },
    { location: "Tallinn, Estonia", date: "March 2023", people: "2 Adults", budget: "300 Euros", duration: "4 Days", transport: "Bus, and walking", purpose: "I foud crazy cheap tickets and couldn't pass it up! It was also off season so the hotel was right in the city center and discounted also. Tallinn it such a beautiful city witha  mix of Medievil and Modern acrhuter, along with a rich history. Even with the crazy snow dump we had it was still a special and memoriable time. We have gine back since because we enjoyed it so much.", imageUrl: "images/tallinn.webp" },
    { location: "Malta", date: "October 2024", people: "2 Adults", budget: "1200 Euros", duration: "7 Days", transport: "Flying and bus", purpose: "Malta is one country that I fell in love with and is on my list to vist again! This trip was a 'Girls Trip', and this small island offer with amaizng nature, history, and beaches! The food, the culture, and the atopmospher was unqiue and beautiful in so many ways.", imageUrl: "images/sunset-malta.webp" },
    { location: "Helsinki, Finland", date: "July, 2025", people: "4 Adults, 1 Infant", budget: "2000 Euros", duration: "10 Days", transport: "Flying and public transport", purpose: "Finland, well what can I say? It is such a peaceful place even when is it quite over crowned in Summer. There is so much nature and charm to Helisnki and it's srounding areas that you get a different flavour where ever you go! My son's personal favourite is the lakes there, which are quite safe to swim in and becasue there are so many to choose from they do not feel overcrowned.", imageUrl: "images/helsinki.webp" },
    { location: "Alanya, Turkey", date: "April, 2023", people: "2 Adults", budget: "600 Euros", duration: "5 Days", transport: "Orginsied by Agency", purpose: "This trip was total chance! For certain travel agency they heavily discount certain trips as for them they are just makig extra money having a full flight and buses, and this was one of those situations. It was a cheap relaxing holiday for us, as everything was all inclusive and we could just enjoy the sun and the beach, and Turkey has plenty of both!", imageUrl: "images/turkey.webp" },
    { location: "New Zealand", date: "September, 2024", people: "2 Adults, 1 Infant", budget: "4000 Euros", duration: "25 Days", transport: "Flying and driving", purpose: "New Zealand is my home country, but because it is quite far away from Lithuania it is somewehre we don't get to travel to often, so when I go I try and make the most of it. Outside of seeing family we spent most of our time outdoors. ew Zealand is known for it's nature and greenry for a reason and is most definantly worth visiting at least once in your life time!", imageUrl: "images/new-zealand.webp" },
]

const cardsContainer = document.querySelector(".trips");

if (cardsContainer) {
    function displayTrips(tripsToDisplay) {
        cardsContainer.innerHTML = "";

        tripsToDisplay.forEach((trip) => {
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

            const button = document.createElement("button");
            button.textContent = "View Trip Details";

            img.addEventListener("click", () => {
                if (details.style.display === "none") {
                    details.style.display = "block";
                    button.textContent = "Hide Details";
                } else {
                    details.style.display = "none";
                    button.textContent = "View Trip Details";
                }
            });

            card.append(locationHeading, img, button, details);
            cardsContainer.appendChild(card);
        });
    }

    displayTrips(trips);
}
