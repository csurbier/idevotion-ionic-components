import { Component, OnInit, Input, Output,EventEmitter,forwardRef } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Events } from '@ionic/angular'
const HTML_TEMPLATE = `
<ion-searchbar  mode="ios" [(ngModel)]="autocomplete.query" [showCancelButton]="false" (ionInput)="updateSearch()"
(ionCancel)="dismiss()" (ionClear)="dismiss()" placeholder="">
</ion-searchbar>
<ion-list lines="full">
  <ion-item  *ngFor="let item of items" (click)="chooseItem(item)">
    <ion-icon slot="end" color="success" size="small">
    </ion-icon>
    <ion-label text-wrap>
      <h2>{{item.structured_formatting.main_text}}</h2>
      <p>{{item.structured_formatting.secondary_text}}</p>
    </ion-label>
  </ion-item>
</ion-list>
`;
 
const CSS_STYLE = `
.searchbar-search-icon {
    top: 18px !important;
}
.searchbar-input {
    border-radius: 25px !important;
}
`;
declare var google;

@Component({
  selector: 'search-places',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IdSearchGooglePlacesComponent),
      multi: true
    }
 ]
})


export class IdSearchGooglePlacesComponent implements  OnInit {

  
  items: any;
  autocomplete: any;
  acService: any;
  placesService: any;
  buttonDisabled = true;
  sessionToken: any;
  @Input() withHistory : boolean = true ; 
  @Input() restrictCountry : boolean = true ; 
  @Input() countryRestricted : string = "FR" ; 
  @Output() itemSelected: EventEmitter<number> = new EventEmitter();

  constructor(public storage:Storage) {
        this.initPage()
  }

  

  initPage() {
    // Create a new session token.
   
    this.sessionToken = new google.maps.places.AutocompleteSessionToken();
    this.acService = new google.maps.places.AutocompleteService();
    this.items = [];
    this.autocomplete = {
      query: ''
    };
  }

  showHistorique(){
    this.getDestinationHistorique().then((result:[])=>{
      if (result){
        for (let element of result){
          this.items.push(element)
        }
      }
    })
  }

  dismiss() {
    this.items = [];
    this.autocomplete = {
      query: ''
    };
    this.showHistorique()
  }

  chooseItem(item: any) {
    this.items = [];
    this.autocomplete.query = item.structured_formatting.main_text + " - " + item.structured_formatting.secondary_text;
    this.buttonDisabled = false;
    if (this.withHistory){
        this.addDestinationToHistorique(item);
    }
    this.itemSelected.emit(item);
  }

  updateSearch() {
    console.log('modal > updateSearch '+this.autocomplete.query);
    if (this.autocomplete.query == '') {
      this.items = [];
      this.buttonDisabled = true
      return;
    }
    let self = this;
    let config: any;
    if (this.restrictCountry){
        config = {
            input: this.autocomplete.query,
            sessionToken: this.sessionToken,
            componentRestrictions: { country: this.countryRestricted } 
        }
    }
    else{
        config = {
            input: this.autocomplete.query,
            sessionToken: this.sessionToken,
        }
    }
    

    this.acService.getPlacePredictions(config, function (predictions, status) {
      self.items = [];
      if (predictions) {
        predictions.forEach(function (prediction) {
          self.items.push(prediction);
        });
      }
    });

  }

  

  ngOnInit() {
    this.items=[]
    this.autocomplete.query=""
    if (this.withHistory){
        this.showHistorique()
    }
    
  }

//Managing History
  deleteDestinationHistorique() {
    return new Promise(resolve => {
      this.storage.remove('idSearchGooglePlaces_destinationhistorique').then((result) => {
        resolve(true)
      });
    });
  }
  addDestinationToHistorique(item) {
    return new Promise(resolve => {
      this.storage.get("idSearchGooglePlaces_destinationhistorique").then((result) => {
       // console.log(result)
        if (result) {
          let trouve = false
          for (let element of result) {
            if (element["id"] == item.id) {
              trouve = true;
              break
            }
          }
          if (!trouve) {
            result.push(item)
            this.storage.set("idSearchGooglePlaces_destinationhistorique", result);
            resolve(true)
          }
          else{
            //trouve
            resolve(true)
          }
        }
        else {
          let array = []
          array.push(item)
          this.storage.set("idSearchGooglePlaces_destinationhistorique", array);
          resolve(true)
        }
      });
    });
  }

  getDestinationHistorique() {
    return new Promise(resolve => {
      this.storage.get("idSearchGooglePlaces_destinationhistorique").then((result) => {
        if (result) {
          resolve(result)
        }
        else {
          resolve()
        }
      });
    });
  }
}