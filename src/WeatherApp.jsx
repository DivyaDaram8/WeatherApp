import { useState } from 'react';
import SearchBox from './Searchbox'
import InfoBox from './infoBox';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Delhi",
        feels_like:24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather app by Divya</h2>
            <SearchBox  updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    )
}
