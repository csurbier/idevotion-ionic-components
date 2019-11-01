# idevotion-ionic-components

Some custom ionic 4 components

# rating-display component

  - A component to display rating similar to Amazon display
 
### Installation

To install the component.

```sh
$ npm install idevotion-ionic-components
```
### How to use:
If you are using Lazy Loading in your application, add the ***IdRatingDisplayComponent***  to the page module where you want to display the rating component otherwise import it to your global app.module.ts

```sh
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {IdRatingDisplayComponent} from 'ideovtion-ionic-components'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage,IdRatingDisplayComponent],
  entryComponents:[IdRatingDisplayComponent]
})
export class HomePageModule {}
```

Then on your html page you can use :
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

ⒸChristophe Surbier 2019

