const fetchForecast = (location) => {
    fetch(`/weather?address=${location}`)
    .then(response => response.json())
    .then(data => {
        errorPar.textContent = ''
        locationPar.textContent = ''
        forecastPar.textContent = ''
        if (data.error) {
            errorPar.textContent = data.error
        } else {
            locationPar.textContent = data.location
            forecastPar.textContent = data.forecast
        }
    })
    .catch(error => console.log(error))
}

const errorPar = document.querySelector('#error')
const locationPar = document.querySelector('#location')
const forecastPar = document.querySelector('#forecast')

const weatherForm = document.querySelector('form');
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    fetchForecast(e.target.location.value);
    e.target.location.value = ''
})