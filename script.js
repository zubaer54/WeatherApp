function getWeather(cityName) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5fd1c330f2d7a8b5c51e5b3aa0ee7677&units=metric`  
    // show loading
    const hlElement = document.getElementById("headLine");
    hlElement.innerText = "Loading..."
    hlElement.style.color = "grey";

    axios.get(url)
    .then(function (response) {
        // handle success
        hlElement.innerText = `Showing weather report for ${response.data.name}, ${response.data.sys.country}:`;
        hlElement.style.color = "black";  
        document.getElementById("Temp").innerText = "Temperature";
        document.getElementById("tem").innerText =  `${response.data.main.temp} °C`;
        document.getElementById("TempMax").innerText = "Maximum Temperature";
        document.getElementById("temMax").innerText = `${response.data.main.temp_max} °C`;
        document.getElementById("TempMin").innerText = "Minimum Temperature";
        document.getElementById("temMin").innerText = `${response.data.main.temp_min} °C`;
        document.getElementById("FeelLike").innerText = "Feels like";
        document.getElementById("feeLik").innerText = `${response.data.main.feels_like} °C`;
        document.getElementById("win").innerText = "Wind Speed";
        document.getElementById("winSpe").innerText = `${response.data.wind.speed} km/h`;
        document.getElementById("pre").innerText = "Pressure";
        document.getElementById("pres").innerText = `${response.data.main.pressure} hPa`;
        document.getElementById("hum").innerText = "Humidity";
        document.getElementById("humi").innerText = `${response.data.main.humidity} %`;
        console.log(response);
    })
    .catch(function (error) {
        // handle error 
        hlElement.innerText = error;
        hlElement.style.color = "red";
        document.getElementById("Temp").innerText = " ";
        document.getElementById("tem").innerText =  " ";
        document.getElementById("TempMax").innerText = " ";
        document.getElementById("temMax").innerText = " ";
        document.getElementById("TempMin").innerText = " ";
        document.getElementById("temMin").innerText = " ";
        document.getElementById("FeelLike").innerText = " ";
        document.getElementById("feeLik").innerText = " ";
        document.getElementById("win").innerText = " ";
        document.getElementById("winSpe").innerText = " ";
        document.getElementById("pre").innerText = " ";
        document.getElementById("pres").innerText = " ";
        document.getElementById("hum").innerText = " ";
        document.getElementById("humi").innerText = " ";
        console.log(error);
    })
    .finally(function () {
        // always executed
        console.log("all done");
    })
}
window.onload = function () {
    document.getElementById("sendButton").onclick = function() {
        const cityName = document.getElementById("cityTextIn").value;
        getWeather(cityName);
    }
}

