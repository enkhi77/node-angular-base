export default {
	selector: 'homeComponent',
	bindings: {},
	controller: class homeCtrl {
		/* @ngInject */
		constructor() {
			this.title = 'Test Title';
		}
		$onInit () {
			console.log('home $onInit');
		}
	},
	template: `<h1>Test Page</h1><div>{{$ctrl.title}}</div>`
};