import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

const HTML_TEMPLATE = `
<div [ngSwitch]="galleryType">
  <!-- Responsive Layout with Ion Grid-->
  <ion-grid *ngSwitchCase="'standard'">
    <ion-row>
      <ion-col size-xs="12" size-sm="12" size-md="6" size-lg="4" *ngFor="let image of images" (click)="clickImage(image)">
        <div class="image-container" [style.background-image]="'url(' + image + ')'" ></div>
      </ion-col>
    </ion-row>
  </ion-grid>

  <div class="images" *ngSwitchCase="'pinterest'">
    <div class="one-image" *ngFor="let image of images" (click)="clickImage(image)">
      <ion-img [src]="image"></ion-img>
    </div>
  </div>
 
</div>
`;
 
const CSS_STYLE = `
.image-container {
  min-height: 200px;
  background-size: cover;
}

@media (min-width: 0px) {
  .images {
      column-count: 2;
  }
}

@media (min-width: 420px) {
  .images {
      column-count: 3;
  }
}

@media (min-width: 720px) {
  .images {
      column-count: 4;
  }
}

.one-image {
  margin: 2px;
}
`;
 
@Component({
  selector: 'imageGallery',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})

export class IdImageGalleryComponent implements OnInit {

  @Input() galleryType : string="standard";
  @Input() imagesToDisplay : any;
  @Output() imagesSelected: EventEmitter<number> = new EventEmitter();

  images : any; 
 
  constructor() {
  }
  

  ngOnInit() {
      this.images = []
      let values = this.imagesToDisplay.split(",")
      for (let url of values){
        this.images.push(url)
      }
   }


   clickImage(image){
     this.imagesSelected.emit(image)
   }
}