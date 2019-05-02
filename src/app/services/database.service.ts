import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable()
export class DatabaseService {

  constructor(
    private db: AngularFirestore
  ){}

  saveDocument( text1:string, text2:string, list:string[] ){

    let id = new Date().getTime();
    let data = {
      id: id,
      text1: text1,
      text2: text2,
      list: list
    }
    return this.db.doc('documents/' + id ).set( data );
    
  }
  
}