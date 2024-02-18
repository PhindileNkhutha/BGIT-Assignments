# weather-app

A weather application that has a unit conversion as well from celsius to Fahrenheit
HTML (index.html):
DOCTYPE Declaration: Specifies the HTML version.
Meta Tags: Defines character set and viewport settings.
Title: Sets the title of the webpage.
Bootstrap CSS Link: Links to the Bootstrap stylesheet for styling.

CSS (style.css):
Body Styling: Sets the background color for the body.
Weather Container Styling: Defines styles for the main container of the weather app.

Bootstrap (Bootstrap CDN):
Bootstrap CSS Link: Provides styling for various elements using Bootstrap.

HTML (index.html - continued):
Container and Form Elements: Creates a container with a form for user input (city and temperature unit).
Input Field: Allows users to input the city name.
Radio Buttons: Lets users select temperature units (Celsius or Fahrenheit).
Get Weather Button: Triggers the JavaScript function to fetch and display weather data.
Weather Info Div: Displays the fetched weather information.

JavaScript (index.html - continued):
API Key: Got it from Open weather API.
getWeather Function: Retrieves weather data using the OpenWeatherMap API based on user input (city and temperature unit).
Fetch API: Sends an HTTP request to the OpenWeatherMap API.
Promise Chain: Handles the response, extracts relevant data (temperature, description, city), and updates the HTML with the weather information.
Error Handling: Displays an error message if there is an issue with fetching the weather data.

Bootstrap and jQuery (Bootstrap CDN):
Bootstrap JS and jQuery Links: Provide Bootstrap JavaScript functionality and enhance the UI.

Website Type Description: The weather app is a website where you can check the weather for any city. It also lets you switch between Celsius and Fahrenheit for temperature readings. It's made for people who want to know the weather quickly and easily.

Reasoning Behind the Website: The app was made because everyone needs to know the weather sometimes, and it's helpful to have temperature options that make sense to you.

Summary of Integrated APIs: The app uses a tool called the OpenWeatherMap API to get the weather data. This API gives the app accurate and up-to-date weather information based on what city you choose. This makes the app useful and reliable for checking the weather.

Notes:
The weather app uses the OpenWeatherMap API to fetch real-time weather data.
Users can input a city name and choose between Celsius and Fahrenheit.
The weather information is displayed below the input form.
Styling is enhanced with Bootstrap for a clean and responsive design.
