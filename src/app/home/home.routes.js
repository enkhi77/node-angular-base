export default function routes ($stateProvider) {
	'ngInject';
	$stateProvider
		.state('base', {
			url: '/',
			views: {
				'body@':{
					component: 'homeComponent'
				}
			}
		});
}