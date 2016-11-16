import angular from 'angular';
import uirouter from 'angular-ui-router';

import { routing } from './home.routes.js';

import HomeComponent from './home.component';
import template from './home.tpl.html';

export default angular
    .module('main.app', [uirouter])
    .config(routing)
    .component('homeComponent', { controller: HomeComponent, template })
    .name;
