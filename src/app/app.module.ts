import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CongratsComponent } from './congrats/congrats.component'; 
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    CongratsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [AuthService,AuthGuardService],
  // providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }