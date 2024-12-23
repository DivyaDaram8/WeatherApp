import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import LightModeIcon from '@mui/icons-material/LightMode';
import "./InfoBox.css";

export default function InfoBox({info}){
    const INIT_URL ="https://images.unsplash.com/photo-1416184232800-5066f40491d7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGR1c3R5JTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D"
    const HOT_URL = "https://images.unsplash.com/photo-1581205135021-fbad89f942a6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1bm55fGVufDB8fDB8fHww";
    const COLD_URL ="https://images.unsplash.com/photo-1422207134147-65fb81f59e38?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL ="https://images.unsplash.com/photo-1605035015406-54c130d0bf89?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnl8ZW58MHx8MHx8fDA%3D";
    return(
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80
           ? RAIN_URL 
           : info.temp > 15 
           ? HOT_URL
           : COLD_URL
          }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity > 80
           ? <ThunderstormIcon />
           : info.temp > 15 
           ? <LightModeIcon />
           : <AcUnitIcon />
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature: {info.temp}&deg;C</p>
            <p>Humidity: {info.humidity}</p>
            <p>Min Temp: {info.tempMin}&deg;C</p>
            <p>Max Temp: {info.tempMax}&deg;C</p>
            <p>The weather can be described as <i>{info.weather}</i> and feels like: {info.feels_like}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}