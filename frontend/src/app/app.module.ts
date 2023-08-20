import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomePageComponent} from "./pages/home/home-page.component";
import {NavComponent} from "./components/nav/nav.component";
import {NgOptimizedImage} from "@angular/common";
import {Footer} from "./components/footer/footer";
import {BlogCardComponent} from "./components/blog-card/blog-card.component";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavComponent,
    Footer,
    BlogCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
