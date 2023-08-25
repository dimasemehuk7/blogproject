import {Component, OnInit} from "@angular/core";
import {BlogService} from "../../../services/blog.service";

@Component({
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss']
})

export class HomePageComponent implements OnInit {
  shortBlogs: any[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getShortBlogs$().subscribe(data => {
      this.shortBlogs = data;
    });
  }
}
