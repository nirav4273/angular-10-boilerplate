import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsLoginGuard } from 'src/shared/guard/is-login/is-login.guard';
const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		loadChildren: () => import('src/app/dashboard/dashboard.module').then(m => m.DashboardModule),
		canActivate: [IsLoginGuard],
		canLoad: [IsLoginGuard]
	},
	{
		path: 'login',
		loadChildren: () => import('src/app/login/login.module').then (m => m.LoginModule)
	},
	{
		path: 'signup',
		loadChildren: () => import('src/app/signup/signup.module').then (m => m.SignupModule)
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
