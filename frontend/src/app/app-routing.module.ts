import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { TasksFormComponent } from './components/tasks-form/tasks-form.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: LoginFormComponent},
  {path: 'home', component: HomeComponent},
  {path: 'tasks', component: TasksFormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
