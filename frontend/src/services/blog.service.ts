import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseUrl = 'http://localhost:8080'; // Адрес вашего сервера

  constructor(private http: HttpClient) { }

  getShortBlogs$(): Observable<any> {
    return this.http.get(`${this.baseUrl}/shortBlog`);
  }
  getArticleById$(id:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/article/${id}`);
  }
}
