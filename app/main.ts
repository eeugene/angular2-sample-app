import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

bootstrap(AppComponent, [ ROUTER_PROVIDERS ]);
