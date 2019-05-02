import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { DatabaseService } from 'src/app/services/database.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-adminslide',
  templateUrl: './adminslide.component.html',
  styleUrls: ['./adminslide.component.css']
})
export class AdminSlideComponent implements OnInit {

  image:ImageData = null;
  
  constructor(
    private st:StorageService,
    private db:DatabaseService
  ) { }

  ngOnInit(): void { }

  changeImage( $e ){
    this.image = $e.target.files[0];
    $($e.target).next('label').text($e.target.files[0].name);
  }

  uploadImage( ){
    if ( ! this.image ){
      alert('Debes seleccionar una imágen');
      return;
    }

    this.db.getDoc(1, false)
    
    .then ( data => {
      let currentID = new Date().getTime();
      console.log(data);
      if ( typeof data.data()["images"] !== "undefined" ){
        let images = data.data()["images"];
        images.push(currentID)
        this.db.updateDocument(1, {
          images: images
        }).then( () =>{
          this.st.uploadSimpleImage( currentID.toString() , this.image, 'slide' ).then( f => {
            alert('Imágen subida correctamente')
          });
        })

        
        
      }else{
        this.db.updateDocument(1, {
          images: [currentID]
        }).then(() => {
          this.st.uploadSimpleImage(currentID.toString(), this.image, 'slide').then(f => {
            alert('Imágen subida correctamente')
          });
        })
      }
    })
    



  }
  
}
