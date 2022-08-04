const apiKey = 'BO2EEYbgQAYA2FwKEzgAYGRw5npLERsM';

const getCity = async (city) => {
    const cityBase = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${apiKey}&q=${city}`;

    const response = await fetch(cityBase + query);
    const data = await response.json();

    return data[0];
}

const getForecast = async (citykey) =>{
    const forecastBase = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${citykey}?apikey=${apiKey}&language=pt-br`;

    const response = await fetch(forecastBase + query);
    const data = await response.json();

    return data[0];
}

// getCity('New York')
//     .then(data => {return getForecast(data)})
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
