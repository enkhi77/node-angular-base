import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './home.routes';

import homeComponent from './components/home.component';

export default angular.module('home', [uiRouter])
	.config(routing)
	.component(homeComponent.selector, homeComponent)
	.name;