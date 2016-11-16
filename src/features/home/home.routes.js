import HomeComponent from './home.component';
import template from './home.tpl.html';

export function routing($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url:       '/',
      component: HomeComponent,
      template:  template
    });
}
