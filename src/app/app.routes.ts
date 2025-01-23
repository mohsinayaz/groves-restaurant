import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: LayoutComponent
}];