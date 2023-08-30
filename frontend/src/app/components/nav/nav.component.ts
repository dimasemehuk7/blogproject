import {Component, OnInit} from "@angular/core";
import {ColorChangeService} from "../../../services/color-change.service";

@Component({
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.scss']
})

export class NavComponent implements OnInit {
  navColor$ = this.colorChangeService.navColor$;

  constructor(private colorChangeService: ColorChangeService) {}

  ngOnInit() {
  }
}
