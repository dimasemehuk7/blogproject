import {Component, OnInit} from "@angular/core";
import {catchError} from "rxjs";
import {BlogService} from "../../../services/blog.service";

@Component({
  templateUrl: "article-page.component.html",
  styleUrls: ["article-page.component.scss"]
})

export class ArticlePageComponent implements OnInit{
  article: any = {}
  constructor(private blogService : BlogService) {
  }
  ngOnInit() {
    this.blogService.getArticleById$("1").pipe(
      catchError(() => [])
    ).subscribe(
      data => {
        this.article = data;
      },
      error => {
        console.error('Error fetching article:', error);
      }
    );
  }
}
