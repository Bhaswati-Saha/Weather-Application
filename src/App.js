import React,{ Component } from 'react';
import Weather from './component/weather_component.js';
import Form from './component/form_component.js';
import './App.css';
import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';


/*
for weather icons which are there in the github folder which is downloaded 
to use all the bootstrap css classes
*/

const API_Key="3ae09c3fb3b427141de10ddab2b0f090";

class App extends Component
{
  constructor()
  {
    super();
    this.state={
      city:'',
      country:'',
      icon:undefined,
      celsius:'',
      max_temp:'',
      min_temp:'',
      description:'',
      error:false
   };
    
    this.weathericon={
      Thunderstorm:"wi-thunderstorm",
      Clear:"wi-day-sunny",
      Rain:"wi-storm-showers",
      Drizzle:"wi-sleet",
      Snow:"wi-snow",
      Atmosphere:"wi-fog",
      Clouds:"wi-day-fog"

    };
  }
  
   calCelsius(temp)
   {
     let cel=Math.floor(temp-273.15);
     return cel;
   }
  
  get_weather_icon(icons,rangeId)
  {
    switch(true)
    {
      case rangeId>=200 && rangeId<=232:
        this.setState({icon:icons.Thunderstorm});
        break;
      case rangeId>=300 && rangeId<=321:
        this.setState({icon:icons.Drizzle});
        break;
      case rangeId>=500 && rangeId<=531:
        this.setState({icon:icons.Rain});
        break;
      case rangeId>=600 && rangeId<=622:
        this.setState({icon:icons.Snow});
        break;
      case rangeId>=701 && rangeId<=781:
        this.setState({icon:icons.Atmosphere});
        break;
      case rangeId===800:
        this.setState({icon:icons.Clear});
        break;
      case rangeId>=801 && rangeId<=804:
        this.setState({icon:icons.Clouds});
        break;
      default:
        this.setState({icon:icons.Clouds});
    }
  }

  getWeather=(e)=>{

     e.preventDefault();
     const city=e.target.elements.city.value;
     const country=e.target.elements.country.value;

     if(city && country)
     {
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}`)
    .then(res=>res.json())
    .then(info=>
    {
      return(
        this.setState({
      city:`${info.name},${info.sys.country}`,
      celsius:this.calCelsius(info.main.temp),
      max_temp:this.calCelsius(info.main.temp_max),
      min_temp:this.calCelsius(info.main.temp_min),
      description:info.weather[0].description,
      error:false
       }),
    this.get_weather_icon(this.weathericon,info.weather[0].id)
    )
    });
  }
  else
  {
    this.setState({error:true});
  }

    
  }

  render()
  {
    const {city,celsius,max_temp,min_temp,description,icon}=this.state;
    return(
      <div  className="App">
        <Form loadWeather={this.getWeather} err={this.state.error}/>
        <Weather 
          city={city} 
          celsius={celsius} 
          max_temp={max_temp} 
          min_temp={min_temp} 
          description={description}
          icon={icon}
        />
      </div>
      );
  }
}
export default App;
