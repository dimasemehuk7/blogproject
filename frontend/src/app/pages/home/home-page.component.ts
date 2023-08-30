import {Component, OnInit} from "@angular/core";
import {BlogService} from "../../../services/blog.service";
import {LoaderService} from "../../../services/loader.service";
import {catchError} from "rxjs";

@Component({
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss']
})

export class HomePageComponent implements OnInit {
  shortBlogs: any[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {

    this.blogService.getShortBlogs$().pipe(
      catchError(() => []),
    ).subscribe(data => {
      this.shortBlogs = data;
    });
  }
}
