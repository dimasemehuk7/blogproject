import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-blog-card',
  templateUrl: 'blog-card.component.html',
  styleUrls: ['blog-card.component.scss']
})
export class BlogCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() type: string = '';

}
