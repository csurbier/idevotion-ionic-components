# idevotion-ionic-components

Some custom ionic 4 components

# rating-display component

  - A component to display rating similar to Amazon display
 ![Rating display component](https://www.idevotion.fr/images/ratingDisplayComponent.png)
# search-places component

  - A component to search google places 
 ![Rating display component](https://www.idevotion.fr/images/searchGooglePlaces.gif)
 
### Installation

To install the components.

```sh
$ npm install idevotion-ionic-components
```
### How to use:
If you are using Lazy Loading in your application, add the ***IDevotionIonicComponentModule***  to the imports section of the page module where you want to display the rating component otherwise import it to your global app.module.ts

```sh
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {IDevotionIonicComponentModule} from 'idevotion-ionic-component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IDevotionIonicComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage],
  entryComponents:[]
})
export class HomePageModule {}
```

### How to use rating-display:
On your html page you can use :
```sh
 <rating-display title="YourTitle" totalNote="7" note=3.5 nbNoteOne=0 nbNoteTwo=1 nbNoteThree=3 nbNoteFour=1 nbNote5=2></rating-display>
```
You can customize the following parameters:


| Parameters | Definition |
| ------ | ------ |
| title | The label you want to display |
| note | The note to display |
| totalNote | Total number of vote received |
| nbNoteOne | Total number received for one star  |
| nbNoteTwo | Total number received for two star  |
| nbNotethree | Total number received for three star  |
| nbNoteFour | Total number received for four star  |
| nbNoteFive | Total number received for five star  |
| activeColor | Color for active star (default is #ffa500)  |
| defaultColor | Default color for inactive star (default is #767676)  |


### How to use search-places:

To be able to use the component, you need to include the Google Map library to your **index.html** of your app with a valid API KEY for using places api.

```sh
<script src="https://maps.googleapis.com/maps/api/js?v=3&key=<yourapikey>&libraries=places"></script>
```

Please notice that this component use **Storage** (https://ionicframework.com/docs/building/storage) so we need to include it in your page or app module.

On your html page you can use :
```sh
 <search-places withHistory=true (itemSelected)="itemSelected($event)"></search-places>
```
You can customize the following parameters:


| Parameters | Definition |
| ------ | ------ |
| withHistory | Set true if you want the component to save your selected places and display them for futur use |
| restrictCountry | true or false (default is true). Use to indicate if your want Google Places to restrict the country in the search |
| countryRestricted | List of country iso code you want to restrict. (default is "FR") |

use **(itemSelected)** event to know when a place is selected.

```sh
  itemSelected(item){
    console.log(item)
  }
 ```
 
 
 <style>.bmc-button img{width: 35px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{padding: 7px 5px 7px 10px !important;line-height: 35px !important;height:51px !important;min-width:217px !important;text-decoration: none !important;display:inline-flex !important;color:#ffffff !important;background-color:#FF5F5F !important;border-radius: 5px !important;border: 1px solid transparent !important;padding: 7px 5px 7px 10px !important;font-size: 28px !important;letter-spacing:0.6px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Cookie', cursive !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#ffffff !important;}</style><link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/csurbier"><img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee"><span style="margin-left:15px;font-size:28px !important;">Buy me a coffee</span></a>
ⒸChristophe Surbier 2019

