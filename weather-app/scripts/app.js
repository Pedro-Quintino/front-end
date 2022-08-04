const searchForm = document.querySelector('form');

const updateCity = async (city) =>{
    const cityName = await getCity(city);
    const weatherCondition = await getForecast(cityName.Key)
    
    return {
        location: cityName, 
        weather: weatherCondition
    };
}

const showInfo =  data => {
    document.querySelector('h2').textContent = data.location.EnglishName;
    document.querySelector('.weather-condition').textContent = data.weather.WeatherText;
    document.querySelector('span').textContent = data.weather.Temperature.Metric.Value;
    if (data.weather.IsDayTime){
        document.querySelector('.time-image').setAttribute('src', 'img/day.svg')
    }
    else{
        document.querySelector('.time-image').setAttribute('src', 'img/night.svg')
    }
    document.querySelector('.icon').setAttribute('src',`img/icons/${data.weather.WeatherIcon}.svg`);
    document.querySelector('.card').classList.remove('none');
}

searchForm.addEventListener('submit', e =>{
    e.preventDefault();
    const city = searchForm.querySelector('.search-input').value.trim();
    updateCity(city)
        .then(data => showInfo(data))
        .catch(error => console.log(error));
})