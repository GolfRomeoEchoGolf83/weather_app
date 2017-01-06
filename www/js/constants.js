/**
 * Created by Greg on 05/01/2017.
 */

angular.module('weather')

  .constant('OpenWeatherConfig', {
    searchUrl: 'http://api.openweathermap.org/data/2.5/weather?q=',
    units: '&units=metric',
    appid: '&appid=ae655732a80e61ceb5461dd6967fbae3',
    imgUrl: 'http://openweathermap.org/img/w/'
  });

