import React, { useEffect, useState } from 'react';

const WeatherWidget = () => {
  const [error, setError] = useState(null);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://app2.weatherwidget.org/js/?id=ww_04d2e43014596";
    script.async = true;
    const weatherWidgetDiv = document.getElementById("weather-widget");
    script.onerror = () => {
      setError("Error loading the weather widget.");
    };
    weatherWidgetDiv.appendChild(script);
    return () => {
      weatherWidgetDiv.removeChild(script);
    };
  }, []);

  return (
    <div id="weather-widget" className="weather-widget-container">
      <div id="ww_04d2e43014596" v='1.3' loc='id' a='{"t":"horizontal","lang":"en","sl_lpl":1,"ids":["wl2863"],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","el_whr":3}'>More forecasts: <a href="https://oneweather.org/sydney/30_days/" id="ww_04d2e43014596_u" target="_blank" rel="noopener noreferrer">Sydney 30 day forecast</a></div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default WeatherWidget;
