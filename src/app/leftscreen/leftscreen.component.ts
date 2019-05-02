import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-leftscreen',
  templateUrl: './leftscreen.component.html',
  styleUrls: ['./leftscreen.component.css']
})
export class LeftScreenComponent implements OnInit {

  text1 = ""
  text2 = ""
  list = [];
  images = [];

  
  constructor( private db:DatabaseService) { 

    this.db.getDoc(1)
    .subscribe( data => {
      let response = data;
      this.text1 = response["text1"];
      this.text2 = response["text2"];
      this.list = response["list"];
      this.images = response["images"] || null;
    })
    
  }

  ngOnInit(): void { }
}
