import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorChangeService {
  private defaultBgColor = '#E1FFE3';
  private bgColorSubject = new BehaviorSubject<string>(this.defaultBgColor);

  private defaultNavColor = '#18f2b2';
  private navColorSubject = new BehaviorSubject<string>(this.defaultNavColor);

  bgColor$ = this.bgColorSubject.asObservable();

  navColor$ = this.navColorSubject.asObservable();


  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const newBgColor = this.determineBgColorBasedOnRoute(event.urlAfterRedirects);
        this.bgColorSubject.next(newBgColor);

        const newNavColor = this.determineNavColorBasedOnRoute(event.urlAfterRedirects);
        this.navColorSubject.next(newNavColor);
      }
    });
  }

  private determineBgColorBasedOnRoute(url: string): string {
    if (url.includes('article')) {
      return '#00322B';
    }
    return this.defaultBgColor;
  }
  private determineNavColorBasedOnRoute(url: string): string {
    if (url.includes('article')) {
      return '#E1FFE3';
    }
    return this.defaultNavColor;
  }
}
