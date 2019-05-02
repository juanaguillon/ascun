import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-adminleftscreen',
  templateUrl: './adminleftscreen.component.html',
  styleUrls: ['./adminleftscreen.component.css']
})
export class AdminLeftScreenComponent implements OnInit {

  currentItem = "";
  first_text = "";
  second_text = "";
  items = [];
  
  constructor(
    private db:DatabaseService
  ) { }

  addItem( ){
    if ( this.currentItem == "" ){
      alert('Debe agregar un texto para el item')
      return;
    }
    
    this.items.push(this.currentItem);
    this.currentItem = "";
  }

  submitForm( e ){
    e.preventDefault();   
    this.db.saveDocument(this.first_text, this.second_text, this.items)
    .then( f => {
      alert('Guardado correctamente');
    })
  }

  ngOnInit(): void { }
}
