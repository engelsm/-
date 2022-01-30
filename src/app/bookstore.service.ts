import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookstoreService {

  constructor(private _http:HttpClient) { }

getBooksFromServer():Observable<any> {
  return this._http.get<any>("http://localhost:8080/bookStore")
}

addBookToServer(bookjson: String):Observable<any> {
  console.log(bookjson);
  return this._http.post<any>("http://localhost:8080/bookStore", bookjson);
}

}
