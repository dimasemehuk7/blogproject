import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private isLoadingSubject = new BehaviorSubject<boolean>(true);

  setLoading(isLoading: boolean) {
    this.isLoadingSubject.next(isLoading);
  }

  get loading$() {
    return this.isLoadingSubject.asObservable();
  }
}
