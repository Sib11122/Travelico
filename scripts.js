let searchBtn = document.getElementById('searchBtn');
let clear=document.getElementById('clearBtn');
searchBtn.onclick = function () {
    fetch("./info.json")
        .then(response => response.json())
        .then(data => {

            let container = document.getElementById("cardsContainer");
            container.style.visibility = "visible";
            container.innerHTML = "";  // clear before adding new cards

            // Loop countries → cities
            data.countries.forEach(country => {
                country.cities.forEach(city => {
                    let card = `
                        <div class="card">
                            <img src="${city.imageUrl}" alt="${city.name}">
                            <div class="card-body">
                                <h3>${city.name}</h3>
                                <p>${city.description}</p>
                                <button>Visit</button>
                            </div>
                        </div>
                    `;
                    container.innerHTML += card;
                });
            });

            // Temples
            data.temples.forEach(t => {
                let card = `
                    <div class="card">
                        <img src="${t.imageUrl}" alt="${t.name}">
                        <div class="card-body">
                            <h3>${t.name}</h3>
                            <p>${t.description}</p>
                            <button>Explore</button>
                        </div>
                    </div>
                `;
                container.innerHTML += card;
            });

            // Beaches
            data.beaches.forEach(b => {
                let card = `
                    <div class="card">
                        <img src="${b.imageUrl}" alt="${b.name}">
                        <div class="card-body">
                            <h3>${b.name}</h3>
                            <p>${b.description}</p>
                            <button>Explore</button>
                        </div>
                    </div>
                `;
                container.innerHTML += card;
            });

        })
        .catch(err => console.log("Error loading JSON:", err));
};
clear.onclick=function(){
    let container = document.getElementById("cardsContainer");
    container.style.visibility = "hidden";
}
