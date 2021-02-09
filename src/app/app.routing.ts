import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginGuardGuard as AuthGuard } from './login-guard.guard';

export const AppRoutes: Routes = [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    },
    { path: 'login',
      component: LoginComponent 
    }, 
    {
      path: '',
      component: AdminLayoutComponent,
      canActivate:[AuthGuard],
      children: [
        {
          path: '',
          canActivate:[AuthGuard],
          loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
        }
      ]
    },
    
    {
      path: '**',
      redirectTo: 'dashboard'
    }
]
