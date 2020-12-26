import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';

import {
    EventDetailsComponent,
    EventRouteActivator,
    EventsListResolver,
    EventsListComponent,
    CreateEventsComponent
} from './events/index';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventsComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver} },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule'}
];