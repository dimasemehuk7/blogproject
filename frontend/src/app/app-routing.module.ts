import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home/home-page.component";
import {ArticlePageComponent} from "./pages/article/article-page.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  { path: 'article/:id', component: ArticlePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
