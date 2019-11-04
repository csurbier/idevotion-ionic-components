import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IdRatingDisplayComponent } from './components/rating-display.component';
import {IdSearchGooglePlacesComponent} from './components/search-google-places'; 
import {IdImageGalleryComponent} from './components/image-gallery.component';
@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
       
    ],
    declarations: [
        IdRatingDisplayComponent,
        IdSearchGooglePlacesComponent,
        IdImageGalleryComponent
    ],
    exports: [
        IdRatingDisplayComponent,
        IdSearchGooglePlacesComponent,
        IdImageGalleryComponent
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
