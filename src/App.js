import Weather from "./Weather";
import "./App.css";

function App() {
  let weatherData = {
    city: "Abuja",
    date: "Monday 11:00",
    description: "scattered clouds",
    imgUrl:
      "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/MostlyClearNight.svg",
    humidity: "34",
    wind: "35",
  };
  return (
    <div className="App">
      <div className="weather-app">
        <header>
          <form className="search-form">
            <input
              type="search"
              placeholder="Enter a city.."
              className="search-form-input"
            />
            <input
              type="submit"
              value="Search"
              className="search-form-button"
            />
          </form>
        </header>
        <main>
          <div className="weather-app-data">
            <div>
              <h1 className="current-city">{weatherData.city}</h1>
              <p className="current-details">
                <span>{weatherData.date}</span>,
                <strong>{weatherData.description}</strong>
                <br />
                Humidity: <strong>{weatherData.humidity}%</strong>, Wind:
                <strong>{weatherData.wind}km/h</strong>
              </p>
            </div>
            <div className="current-temperature">
              <span>
                <img src={weatherData.imgUrl} width="50" alt="log" />
              </span>
              <span className="weather-app-temperature">19</span>
              <span className="weather-app-unit">℃</span>
            </div>
          </div>
        </main>
        <footer>
          This project was coded by
          <a
            href="https://github.com/GloryEvi"
            target="_blank"
            rel="noreferrer"
          >
            Glory Evi
          </a>
          is
          <a
            href="https://github.com/GloryEvi/my-react-app"
            target="blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
          and
          <a
            href="https://reactevi.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
        <Weather city="Abuja" />
      </div>
    </div>
  );
}

export default App;
