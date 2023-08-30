import {Component, OnInit} from '@angular/core';
import {ColorChangeService} from "../services/color-change.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoading = true;
  backgroundColor$ = this.colorChangeService.bgColor$;

  constructor(private colorChangeService: ColorChangeService) {}

  ngOnInit() {
  }
}
