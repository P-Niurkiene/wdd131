document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const selectElement = document.querySelector("select[name='products'");

const defaultOption = document.createElement("option");
defaultOption.textContent = "Choose a Product...";
defaultOption.value = "";
defaultOption.disabled = true;
defaultOption.selected = true;
selectElement.appendChild(defaultOption);

products.forEach(product => {
    const option = document.createElement("option");
    option.textContent = product.name;
    option.value = product.id;
    selectElement.appendChild(option);
});

if (window.location.pathname.includes("review.html")) {

    let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
    reviewCount++;

    localStorage.setItem("reviewCount", reviewCount);

    console.log(`Reviews completed: ${reviewCount}`);
}