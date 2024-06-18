document.getElementById('fetch-weather-btn').addEventListener('click', function() {
    const location = document.getElementById('location-input').value;
    if (location) {
        getWeather(location);
    } else {
        alert('Please enter a location.');
    }
});

function getWeather(location) {
    const apiKey = '6fc76feb9025d756e6d3c13ac4b2b580'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=6fc76feb9025d756e6d3c13ac4b2b580&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('Location not found.');
            }
        })
        .catch(error => console.error('Error fetching the weather data:', error));
}

function displayWeather(data) {
    const location = data.name;
    const temperature = data.main.temp;
    const conditions = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    document.getElementById('location').textContent = `Location: ${location}`;
    document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
    document.getElementById('conditions').textContent = `Conditions: ${conditions}`;
    document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${windSpeed} m/s`;
}
