import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';
import './home.css';
import './home.html';

import articleService from '../../services/article.service';
import articleFactory from '../../services/article.factory';
import checkUrl from '../../services/checkUrl.service';
import dateFormat from '../../services/dateFormat.service';

export default angular.module('nytApp.home', [require('angular-ui-router'), articleService, articleFactory, checkUrl, dateFormat])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;