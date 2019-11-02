import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IdRatingDisplayComponent } from './components/rating-display.component';
import {IdSearchGooglePlacesComponent} from './components/search-google-places'; 

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
       
    ],
    declarations: [
        IdRatingDisplayComponent,
        IdSearchGooglePlacesComponent
    ],
    exports: [
        IdRatingDisplayComponent,
        IdSearchGooglePlacesComponent
    ]
})
export class IDevotionIonicComponentModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IDevotionIonicComponentModule,
            providers: []
        };
    }
}
