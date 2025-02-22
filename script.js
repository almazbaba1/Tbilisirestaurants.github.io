// Function to check if the user is logged in
function checkAuth() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
        document.getElementById("auth-container").style.display = "none"; // Hide login/register form
        document.getElementById("buttons-container").style.display = "block"; // Show buttons
    } else {
        document.getElementById("auth-container").style.display = "block";
        document.getElementById("buttons-container").style.display = "none";
        document.getElementById("restaurant-list").style.display = "none";
    }
}

// Check login status when the page loads
document.addEventListener("DOMContentLoaded", checkAuth);

// Sign-up function
document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        document.getElementById("signup-message").innerText = "This email is already in use!";
        return;
    }

    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("signup-message").innerText = "Registration successful!";
    document.getElementById("signup-form").reset();
});

// Login function
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
        localStorage.setItem("currentUser", JSON.stringify(foundUser));
        document.getElementById("login-message").innerText = "Login successful!";
        checkAuth();
    } else {
        document.getElementById("login-message").innerText = "Invalid email or password!";
    }
});

// Logout function
function logout() {
    localStorage.removeItem("currentUser");
    checkAuth();
}

// Restaurant data for each location
const restaurantData = {
    "Rustaveli": [
        { 
            name: "Lolita", 
            images: ["images/Lolita-1.jpg", "images/Lolita-2.jpg", "images/Lolita-3.jpg"], 
            description: "Lolita - Restaurant inspired by NY comfort food, Cocktail Bar inspired by bespoke mixology, Night Club inspired by Techno night scene. Tbilisi, Vera district, 19th century house, with distinct spirit and design, three floors with individual soul, three different spaces: Restaurant, cocktail Bar and Night Club. Comfort food, fragrant drinks and uplifting music, good enough to give you goosebumps." 
        },
        { 
            name: "Stamba", 
            images: ["images/Stamba-1.jpg", "images/Stamba-2.jpg", "images/Stamba-3.jpg"], 
            description: "Cafe Stamba is where the industrial chic aesthetic shines brightest. A menu of modern comfort food makes an easy segue between Georgian and international cuisines with expertly crafted cocktails on offer at the adjacent Pink Bar,bounded by an outdoor terrace. One can also enjoy a charming Chocolaterie and Roastery presenting a selection of high quality artisanal chocolate made in-house and coffee.." 
        },
        { 
            name: "Keto and Kote", 
            images: ["images/keto-and-kote-1.jpg", "images/keto-and-kote-2.jpg", "images/keto-and-kote-3.jpg"], 
            description: "Famous for its delicious Georgian dishes." 
        }
    ],
    "Saburtalo": [
        { 
            name: "Ninia’s garden", 
            images: ["images/Ninia’s garden-1.jpg", "images/Ninia’s garden-2.jpg", "images/Ninia’s garden-3.jpg"], 
            description: "Gorgeous garden area and delicious food. Very calming and peaceful vibe with good service." 
        },
        { 
            name: "Sormoni", 
            images: ["images/Sormoni-1.jpg", "images/Sormoni-2.jpg", "images/Sormoni-3.jpg"], 
            description: "Classic Georgian food with a warm atmosphere." 
        },
        { 
            name: "Unfound Door Tbilisi", 
            images: ["images/Unfound Door Tbilisi-1.jpg", "images/Unfound Door Tbilisi-2.jpg", "images/Unfound Door Tbilisi-3.jpg"], 
            description: "Delicious meal in a beautiful setting with candlelight and classic modern decor. Wine delicious and crowd stylish. Don’t miss.." 
        }
    ],
    "Isani": [
        { 
            name: "Beernest", 
            images: ["images/Beernest-1.jpg", "images/Beernest-2.jpg", "images/Beernest-3.jpg"], 
            description: "indoor bar-restaurant offering a graceful combination of elegance and modern style, along with wonderful Georgian and Eurepean food, beer and wine." 
        },
        { 
            name: "Khinkali House", 
            images: ["images/Khinkali House-1.jpg", "images/Khinkali House-2.jpg", "images/Khinkali House-3.jpg"], 
            description: "Traditional Georgian restaurant serving local dishes." 
        },
        { 
            name: "Bread House", 
            images: ["images/bread-house-1.jpg", "images/bread-house-2.jpg", "images/bread-house-3.jpg"], 
            description: "A bakery with delicious bread and sandwiches." 
        }
    ],
    "Vake": [
        { 
            name: "Buneba700", 
            images: ["images/Buneba700-1.jpg", "images/Buneba700-2.jpg", "images/Buneba700-3.jpg"], 
            description: "Buneba is a modern reinvention of Georgian cuisine based on the finest quality of products sourced from local producers.Creative and innovative culinary techniques combined with newer methods of preparation.." 
        },
        { 
            name: "Orangery", 
            images: ["images/Orangery-1.jpg", "images/Orangery-2.jpg", "images/Orangery-3.jpg"], 
            description: "If you are planning to organize a special evening, you are looking for a place where you will have an unforgettable event with dear people - the new space of the orangery was created for such gatherings." 
        },
        { 
            name: "Shushabandi", 
            images: ["images/Shushabandi-1.jpg", "images/Shushabandi-2.jpg", "images/Shushabandi-3.jpg"], 
            description: "Modern cafe with international flavors and stylish decor." 
        }
    ],
    "Avlabari": [
        { 
            name: "SanSevenBistro", 
            images: ["images/SanSevenBistro-1.jpg", "images/SanSevenBistro-2.jpg", "images/SanSevenBistro-3.jpg"], 
            description: "Located by the river, offers traditional Georgian food." 
        },
        { 
            name: "In The Shadow of Metekhi", 
            images: ["images/in-the-shadow-of-metekhi-1.jpg", "images/in-the-shadow-of-metekhi-2.jpg", "images/in-the-shadow-of-metekhi-3.jpg"], 
            description: "A great place to enjoy local delicacies." 
        },
        { 
            name: "Asado", 
            images: ["images/asado-1.jpg", "images/asado-2.jpg", "images/asado-3.jpg"], 
            description: "Famous for its Georgian bread and pastries." 
        }
    ],
    "Marjanishvili": [
        { 
            name: "esquisse", 
            images: ["images/esquisse-1.jpg", "images/esquisse-2.jpg", "images/esquisse-3.jpg"], 
            description: "Cozy restaurant known for its Georgian wine." 
        },
        { 
            name: "Barbarestan", 
            images: ["images/barbarestan-1.jpg", "images/barbarestan-2.jpg", "images/barbarestan-3.jpg"], 
            description: "Historic Georgian restaurant with a unique atmosphere." 
        },
        { 
            name: "strada", 
            images: ["strada-1.jpg", "images/strada-2.jpg", "images/strada-3.jpg"], 
            description: "Specializes in burgers and grilled food." 
        }
    ]
};
function showRestaurants(location) {
    const listContainer = document.getElementById("restaurant-list");
    const restaurants = restaurantData[location] || [];

    listContainer.innerHTML = `<h2>Restaurants in ${location}</h2>`;

    if (restaurants.length === 0) {
        listContainer.innerHTML += "<p>No restaurants found.</p>";
    } else {
        restaurants.forEach(resto => {
            const button = document.createElement("button");
            button.innerText = resto.name;
            button.onclick = function () { showRestaurantDetails(resto); };
            listContainer.appendChild(button);
        });
    }

    listContainer.style.display = "block";
}

function showRestaurantDetails(restaurant) {
    const detailsContainer = document.getElementById("restaurant-details");
    
    let imagesHTML = restaurant.images.map(img => `<img src="${img}" alt="${restaurant.name}" style="width: 100%; max-width: 400px; margin-bottom: 10px;">`).join("");

    detailsContainer.innerHTML = `
        <h3>${restaurant.name}</h3>
        ${imagesHTML}
        <p>${restaurant.description}</p>
    `;
    detailsContainer.style.display = "block";
}




