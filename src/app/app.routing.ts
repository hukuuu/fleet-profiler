import { Routes, RouterModule } from '@angular/router';
import { Home } from './pages/home';

const appRoutes: Routes = [
    { path: 'home',  component: Home }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
