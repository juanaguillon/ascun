import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminleftscreen',
  templateUrl: './adminleftscreen.component.html',
  styleUrls: ['./adminleftscreen.component.css']
})
export class AdminLeftScreenComponent implements OnInit {

  currentItem = "";
  first_text = "";
  second_text = "";
  items = []
  
  constructor() { }

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
  }

  ngOnInit(): void { }
}
