import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { BookstoreService } from '../bookstore.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  book:any;

  constructor(private _service:BookstoreService) { }

  ngOnInit(): void {
  }

  addBookFormSubmit(bookjson: String){
    this._service.addBookToServer(bookjson);
  }
}
