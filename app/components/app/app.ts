import {Component, ViewEncapsulation} from 'angular2/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';
// import {HTTP_PROVIDERS} from 'angular2/http';

import {HomeCmp} from '../home/home';
import {ChatCmp} from '../chat/chat';

@Component({
  selector: 'app',
  viewProviders: [],
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/chat', component: ChatCmp, as: 'Chat' },
  { path: '/', component: HomeCmp, as: 'Home' }
])
export class AppCmp {}
