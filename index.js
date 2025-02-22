const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Basit bir GET endpoint
app.get('/', (req, res) => {
    res.send('Restaurant Backend API');
});

// Dinamik verilerle bir REST API oluşturma
const restaurants = [
    {
        name: "Lolita",
        location: "Rustaveli",
        description: "Restaurant inspired by NY comfort food."
    },
    {
        name: "Stamba",
        location: "Rustaveli",
        description: "A place with industrial chic aesthetics and comfort food."
    }
];

// Tüm restoranları döndüren bir GET endpoint
app.get('/restaurants', (req, res) => {
    res.json(restaurants);
});

// Belirli bir restoranı döndüren bir GET endpoint
app.get('/restaurants/:name', (req, res) => {
    const restaurantName = req.params.name;
    const restaurant = restaurants.find(r => r.name.toLowerCase() === restaurantName.toLowerCase());

    if (restaurant) {
        res.json(restaurant);
    } else {
        res.status(404).send('Restaurant not found');
    }
});

// Sunucuyu başlatma
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
