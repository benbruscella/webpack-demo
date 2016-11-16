import HomeController from './home.controller';
import template       from './home.html';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: template,
      controller: HomeController,
      controllerAs: 'home'
    });
}
