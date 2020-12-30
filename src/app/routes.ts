import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';

import {
    EventDetailsComponent,
    EventRouteActivator,
    EventsListResolver,
    EventsListComponent,
    CreateEventComponent,
    CreateSessionComponent
} from './events/index';
import { UserModule } from './user/user.module';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver} },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    // { path: 'user', loadChildren: './user/user.module#UserModule' }
    { path: 'user', loadChildren: () => UserModule } // breaks lazy loading, but works for now
];
