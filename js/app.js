const APP_KEY = `ab80c6f97b8fb71629dfc499947f7ff5`

const searchResultsByButton = () => {
    const inputSearchField = document.getElementById('input-search-field').value
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${inputSearchField}&appid=${APP_KEY}&units=metric`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayResults(data))
}

// results display in UI
const displayResults = temperature => {
    setInnerText('city-name', temperature.name)
    setInnerText('dynamic-temperature', temperature.main.temp)
    setInnerText('max-temp', temperature.main.temp_max)
    setInnerText('min-temp', temperature.main.temp_min)
    setInnerText('condition', temperature.weather[0].main)

    // set weather icon
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}.png`
    const weatherIcon = document.getElementById('Weather-icon')
    weatherIcon.setAttribute('src', url)
        // console.log(temperature)
}

// set inner text
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text
}