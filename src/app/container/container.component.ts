import { Component, OnInit, ViewChild } from '@angular/core';
// import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'app-container',
  template: `

  `,
  styles: [
  ]
})



export class ContainerComponent implements OnInit {
  // public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  ngOnInit(){
  //   <div>  
  //   <dp-date-picker #dayPicker></dp-date-picker>
  //   </div> 
  //   <input type="file" name="photo" ng2FileSelect [uploader]="uploader" />
  
  // <button type="button" class="btn btn-success btn-s" 
  //   (click)="uploader.uploadAll()" 
  //   [disabled]="!uploader.getNotUploadedItems().length" >
  //       Upload an Image
  // </button>
  //   this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
  //   this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
  //        console.log('FileUpload:uploaded:', item, status, response);
  //        alert('File uploaded successfully');
  //    };
 //}
  }

}
