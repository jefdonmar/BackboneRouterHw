import $ from 'jquery';

const APP_ID = 'IWlk5V6iUTGc19BvEwm8n9A0HM9XhEjzp4akYGHJ';
const API_KEY = '623gYPjh8AEFCGMaGWowTmpz3GiboYKsYygu75tm';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-KEY': API_KEY

  }


});

