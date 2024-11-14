async function getWeather() {
    const city = document.getElementById('city').value;
    const loadingSpinner = document.getElementById('loading-spinner');
    const weatherResult = document.getElementById('weather-result');
    
    // If no city is entered, show alert and exit the function
    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    try {
        // Show loading spinner and hide previous results
        loadingSpinner.style.display = 'block';
        weatherResult.style.display = 'none';

        // Fetch coordinates for the city using Open Meteo's geocoding
        const geocodeUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
        const geocodeResponse = await fetch(geocodeUrl);
        const geocodeData = await geocodeResponse.json();

        // Check if the city was found
        if (!geocodeData.results || geocodeData.results.length === 0) {
            alert('City not found. Please try another city.');
            loadingSpinner.style.display = 'none';
            return;
        }

        // Get latitude, longitude, and city name from the first result
        const { latitude, longitude, name } = geocodeData.results[0];

        // Fetch weather data for the city
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();

        // Update the UI with weather data
        document.getElementById('city-name').textContent = name;
        document.getElementById('temperature').textContent = `Temperature: ${weatherData.current_weather.temperature}°C`;
        document.getElementById('wind-speed').textContent = `Wind Speed: ${weatherData.current_weather.windspeed} km/h`;

        // Show weather result and hide loading spinner
        weatherResult.style.display = 'block';
        loadingSpinner.style.display = 'none';

    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("An error occurred while fetching the weather. Please try again later.");
        loadingSpinner.style.display = 'none';
    }
}
