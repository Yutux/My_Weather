import './App.css';
import Forecast from './components/Forecast';
import Inputs from './components/Inputs';
import TemperaturesAndDetails from './components/TemperaturesAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';
//import getWeatherData from './services/WeatherServices';

function App() {

  // const fetchWeather = async () => {
  //    const data = await getWeatherData('weather', {q: 'paris'});
  //    console.log(data);
  // };

  // fetchWeather();

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />
      <TimeAndLocation />
      <TemperaturesAndDetails />
      <Forecast title="hourly forecast" />
      <Forecast title="dayli forecast" />
    </div>
  );
}

export default App;
