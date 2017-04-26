import '../style/app.scss';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './app.config';
import home from './home/index';

angular.module('app', [uiRouter, home])
	.config(routing);