document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const products = [
    { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
    { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
];

const selectElement = document.querySelector("select[name='products']");
if (selectElement) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.textContent = product.name;
        option.value = product.id;
        selectElement.appendChild(option);
    });
}

if (window.location.pathname.includes("review.html")) {
    let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);

    const counterEl = document.getElementById("reviewCount");
    if (counterEl) counterEl.textContent = reviewCount;
}
