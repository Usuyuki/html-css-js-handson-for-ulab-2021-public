/** @format */

function getForecast() {
  const url = "https://weather.tsukumijima.net/api/forecast/city/090010";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let forecastImgJS = data.forecasts[2].image.url;
      let forecastMaxTempJS = data.forecasts[2].temperature.max.celsius;
      let forecastMinTempJS = data.forecasts[2].temperature.min.celsius;
      let forecastDetailJS = data.forecasts[2].detail.weather;
      forecastImg.innerHTML = "<img src='" + forecastImgJS + "'>";
      forecastMaxTemp.innerHTML = "最高気温" + forecastMaxTempJS + "度";
      forecastMinTemp.innerHTML = "最低気温" + forecastMinTempJS + "度";
      forecastDetail.innerHTML = forecastDetailJS;
    });
}
