import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Category } from './model/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) {}

  //private baseUrl = 'http://localhost:8080/category';
  private baseUrl = `${environment.apiUrl}/category`;
  

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl);
  }

  saveCategory(category: Category): Observable<Category> {
      const { id } = category;
      const url = id ? `${this.baseUrl}/${id}` : this.baseUrl;
      return this.http.put<Category>(url, category);
    }

  deleteCategory(idCategory : number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${idCategory}`);
  } 
}
