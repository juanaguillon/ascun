import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable()
export class StorageService {
  constructor( private st:AngularFireStorage){


    
  }

  uploadSimpleImage(idDoc: string, image: ImageData, folder: string) {

    const nameimg = this.st.ref(`${folder}/${idDoc}`);
    return nameimg.put(image);
  }
}