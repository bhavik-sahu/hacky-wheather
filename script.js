// let map;

// // Initialize the map with a default center and zoom level
// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: 20.5937, lng: 78.9629 }, // Default center (e.g., India)
//         zoom: 4,
//     });
// }

// async function getWeather() {
//     const city = document.getElementById('city').value;
//     if (!city) {
//         alert('Please enter a city name.');
//         return;
//     }

//     try {
//         // Fetch coordinates for the city using Open Meteo's geocoding
//         const geocodeUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
//         const geocodeResponse = await fetch(geocodeUrl);
//         const geocodeData = await geocodeResponse.json();

//         if (!geocodeData.results || geocodeData.results.length === 0) {
//             alert('City not found. Please try another city.');
//             return;
//         }

//         // Get latitude and longitude from the first result
//         const { latitude, longitude, name } = geocodeData.results[0];

//         // Fetch weather data
//         const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
//         const response = await fetch(weatherUrl);
//         const data = await response.json();

//         // Update the UI with weather data
//         document.getElementById('city-name').textContent = name;
//         document.getElementById('temperature').textContent = `Temperature: ${data.current_weather.temperature}°C`;
//         document.getElementById('wind-speed').textContent = `Wind Speed: ${data.current_weather.windspeed} km/h`;

//         // Center the map on the city's coordinates
//         map.setCenter({ lat: latitude, lng: longitude });
//         map.setZoom(10); // Zoom in on the city

//         // Add a marker on the map for the city
//         new google.maps.Marker({
//             position: { lat: latitude, lng: longitude },
//             map: map,
//             title: name,
//         });

//     } catch (error) {
//         console.error("Error fetching weather data:", error);
//         alert("An error occurred. Please try again later.");
//     }
// }
// let map;
// let marker;

// // Initialize the map with a default center and zoom level
// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: 20.5937, lng: 78.9629 }, // Default center (India)
//         zoom: 4,
//     });
// }

// async function getWeather() {
//     const city = document.getElementById('city').value;
//     if (!city) {
//         alert('Please enter a city name.');
//         return;
//     }

//     // Show loading message
//     document.getElementById('loading').style.display = 'block';

//     try {
//         // Fetch coordinates for the city using Open Meteo's geocoding
//         const geocodeUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
//         const geocodeResponse = await fetch(geocodeUrl);
//         const geocodeData = await geocodeResponse.json();

//         if (!geocodeData.results || geocodeData.results.length === 0) {
//             alert('City not found. Please try another city.');
//             return;
//         }

//         // Get latitude and longitude from the first result
//         const { latitude, longitude, name } = geocodeData.results[0];

//         // Fetch weather data
//         const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
//         const response = await fetch(weatherUrl);
//         const data = await response.json();

//         // Update the UI with weather data
//         document.getElementById('city-name').textContent = name;
//         document.getElementById('temperature').textContent = `Temperature: ${data.current_weather.temperature}°C`;
//         document.getElementById('wind-speed').textContent = `Wind Speed: ${data.current_weather.windspeed} km/h`;

//         // Center the map on the city's coordinates
//         map.setCenter({ lat: latitude, lng: longitude });
//         map.setZoom(10);

//         // Remove previous marker if exists
//         if (marker) marker.setMap(null);

//         // Add a marker on the map for the city
//         marker = new google.maps.Marker({
//             position: { lat: latitude, lng: longitude },
//             map: map,
//             title: name,
//         });

//     } catch (error) {
//         console.error("Error fetching weather data:", error);
//         alert("An error occurred. Please try again later.");
//     } finally {
//         // Hide loading message
//         document.getElementById('loading').style.display = 'none';
//     }
// }

// // Allow Enter key press to trigger the getWeather function
// document.getElementById('city').addEventListener('keypress', (event) => {
//     if (event.key === 'Enter') {
//         getWeather();
//     }
// });

// async function getWeather() {
//     const city = document.getElementById('city').value;
//     if (!city) {
//         alert('Please enter a city name.');
//         return;
//     }

//     // Show loading animation
//     document.getElementById('loading').style.display = 'block';
//     document.getElementById('weather-info').style.display = 'none';

//     try {
//         // Fetch coordinates for the city using Open Meteo's geocoding
//         const geocodeUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
//         const geocodeResponse = await fetch(geocodeUrl);
//         const geocodeData = await geocodeResponse.json();

//         if (!geocodeData.results || geocodeData.results.length === 0) {
//             alert('City not found. Please try another city.');
//             return;
//         }

//         // Get latitude and longitude from the first result
//         const { latitude, longitude, name } = geocodeData.results[0];

//         // Fetch weather data
//         const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
//         const response = await fetch(weatherUrl);
//         const data = await response.json();

//         // Update the UI with weather data
//         document.getElementById('city-name').textContent = name;
//         document.getElementById('temperature').textContent = `Temperature: ${data.current_weather.temperature}°C`;
//         document.getElementById('wind-speed').textContent = `Wind Speed: ${data.current_weather.windspeed} km/h`;

//         // Show weather information with animation
//         document.getElementById('weather-info').style.display = 'block';
//         document.getElementById('weather-info').classList.add('fade-in');

//     } catch (error) {
//         console.error("Error fetching weather data:", error);
//         alert("An error occurred. Please try again later.");
//     } finally {
//         // Hide loading animation
//         document.getElementById('loading').style.display = 'none';
//     }
// }

// // Allow Enter key press to trigger the getWeather function
// document.getElementById('city').addEventListener('keypress', (event) => {
//         if (event.key === 'Enter') {
//             getWeather();
//     }
// });


// let map;

// // Initialize the map with a default center and zoom level
// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: 20.5937, lng: 78.9629 }, // Default center (e.g., India)
//         zoom: 4,
//     });
// }

// // Function to fetch weather data and update the UI and map
// async function getWeather() {
//     const city = document.getElementById('city').value;
//     if (!city) {
//         alert('Please enter a city name.');
//         return;
//     }

//     try {
//         // Fetch coordinates for the city using Open Meteo's geocoding
//         const geocodeUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
//         const geocodeResponse = await fetch(geocodeUrl);
//         const geocodeData = await geocodeResponse.json();

//         if (!geocodeData.results || geocodeData.results.length === 0) {
//             alert('City not found. Please try another city.');
//             return;
//         }

//         // Get latitude, longitude, and name from the first result
//         const { latitude, longitude, name } = geocodeData.results[0];

//         // Fetch weather data
//         const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
//         const response = await fetch(weatherUrl);
//         const data = await response.json();

//         // Update the UI with weather data
//         document.getElementById('city-name').textContent = name;
//         document.getElementById('temperature').textContent = `Temperature: ${data.current_weather.temperature}°C`;
//         document.getElementById('wind-speed').textContent = `Wind Speed: ${data.current_weather.windspeed} km/h`;

//         // Center the map on the city's coordinates
//         map.setCenter({ lat: latitude, lng: longitude });
//         map.setZoom(10); // Zoom in on the city

//         // Add a marker on the map for the city
//         new google.maps.Marker({
//             position: { lat: latitude, lng: longitude },
//             map: map,
//             title: name,
//         });

//     } catch (error) {
//         console.error("Error fetching weather data:", error);
//         alert("An error occurred. Please try again later.");
//     }
// }

// Function to fetch weather data and update the UI
async function getWeather() {
    const city = document.getElementById('city').value;
    const loadingSpinner = document.getElementById('loading-spinner');
    const weatherResult = document.getElementById('weather-result');
    
    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    try {
        // Show loading spinner and hide previous result
        loadingSpinner.style.display = 'block';
        weatherResult.style.display = 'none';

        // Fetch coordinates for the city using Open Meteo's geocoding
        const geocodeUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
        const geocodeResponse = await fetch(geocodeUrl);
        const geocodeData = await geocodeResponse.json();

        if (!geocodeData.results || geocodeData.results.length === 0) {
            alert('City not found. Please try another city.');
            loadingSpinner.style.display = 'none';
            return;
        }

        // Get latitude, longitude, and name from the first result
        const { latitude, longitude, name } = geocodeData.results[0];

        // Fetch weather data
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
        const response = await fetch(weatherUrl);
        const data = await response.json();

        // Update the UI with weather data
        document.getElementById('city-name').textContent = name;
        document.getElementById('temperature').textContent = `Temperature: ${data.current_weather.temperature}°C`;
        document.getElementById('wind-speed').textContent = `Wind Speed: ${data.current_weather.windspeed} km/h`;

        // Show weather result and hide loading spinner
        weatherResult.style.display = 'block';
        loadingSpinner.style.display = 'none';

    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("An error occurred. Please try again later.");
        loadingSpinner.style.display = 'none';
    }
}
