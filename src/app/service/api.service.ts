import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private baseUrl = environment.baseUrl;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Create
  createVip(data): Observable<any> {
    let url = `${this.baseUrl}/create`;
    return this.http.post('create', data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all vips
  getVips() {
    return this.http.get('/'
    , {responseType: 'text'}
    );
  }

  // Get vip
  getVip(id): Observable<any> {
    let url = `${this.baseUrl}/read/${id}`;
    return this.http.get(`read/${id}`, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }


  // Update vip
  updateVip(id, data): Observable<any> {
    let url = `update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete vip
  deleteVip(id): Observable<any> {
    let url = `delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}