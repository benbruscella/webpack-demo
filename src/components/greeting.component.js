import angular from 'angular';

const greetingDef = {
  bindings: {
    name: '='
  },
  template: '<h1>Hello, {{$ctrl.name}}</div>'
};

export default angular.module('components.greeting', [])
  .component('greeting', greetingDef)
  .name;
