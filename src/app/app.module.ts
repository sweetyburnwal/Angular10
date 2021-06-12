import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [  //the declarations array contain AppComponent so that angular can locate its selector
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule, //so application runs correctly on the browser
    HttpClientModule,
    //Router module know about configured routes as we pass them into router module by calling the forRoot method.
    RouterModule.forRoot([//this registers the router service provider,declares the router directives and exposes the configured routes.
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
    ProductModule,
  ],
  bootstrap: [AppComponent] //list our AppComponent as starting component for our application
})
export class AppModule { }
