import React from 'react';

const Weather = props => {
  return (
    <div className="Weather" >
      { props.city && props.country && <p> Location : {props.city}, {props.country}</p> }
      { props.temperature && <p> Temperature : {props.temperature}℃</p> }
      { props.humidity && <p> Humidity : {props.humidity}%</p> }
      { props.description && <p> Description : {props.description}</p> }
      { props.error && <p> Error : {props.error}</p> }
    </div>
  );
} 

export default Weather;
