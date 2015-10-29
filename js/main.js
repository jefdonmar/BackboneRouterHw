import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Router from './router';
import './ajax_setup';
import CartonCollection from './cartoon_collection';


console.log('Hello, World');

var appElement = $('.app');

var router = new Router(appElement);
router.start();

