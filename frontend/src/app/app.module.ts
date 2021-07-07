import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FoldersFormComponent } from './components/folders-form/folders-form.component';
import { TasksFormComponent } from './components/tasks-form/tasks-form.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoldersFormComponent,
    TasksFormComponent,
    NavHeaderComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
