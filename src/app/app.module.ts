import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from "@angular/material/card";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginSuccesComponent } from './pages/login-succes/login-succes.component';
import { ForumComponent } from './pages/forum/forum.component';
import { NewForumComponent } from './pages/new-forum/new-forum.component';
import { PostComponent } from './pages/post/post.component';
import { NewPostComponent } from './pages/new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LoginSuccesComponent,
    ForumComponent,
    NewForumComponent,
    PostComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
