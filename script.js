// Handle tab switching
function showTab(tab) {
    let tabs = document.querySelectorAll(".tab");
    tabs.forEach(btn => btn.classList.remove("active"));
    
    document.querySelector(`.tab[onclick="showTab('${tab}')"]`).classList.add("active");

    // Change form fields based on tab
    if (tab === "flights") {
        document.querySelector("#from").placeholder = "From (Airport)";
        document.querySelector("#to").placeholder = "To (Airport)";
    } else if (tab === "hotels") {
        document.querySelector("#from").placeholder = "City or Hotel Name";
        document.querySelector("#to").style.display = "none";
    } else if (tab === "trains") {
        document.querySelector("#from").placeholder = "From (Station)";
        document.querySelector("#to").placeholder = "To (Station)";
    }
}

// Handle Search Button Click
document.querySelector("#search-btn").addEventListener("click", function() {
    let from = document.querySelector("#from").value;
    let to = document.querySelector("#to").value;
    let date = document.querySelector("#date").value;

    if (from === "" || date === "") {
        alert("Please fill all fields");
    } else {
        alert(`Searching for ${from} to ${to} on ${date}`);
    }
});