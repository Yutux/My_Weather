const API_KEY = "be60bca47b523e6a4abc79808c808a3d";
const BASE_URL = "https://api.openweathermap.org/data/2.5";





const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY});

    return fetch(url).then((res) => res.json());
};

const formatdCurrentWeather = (data) => {
    
}

const getFormattedWeatherData = (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then();
;}
