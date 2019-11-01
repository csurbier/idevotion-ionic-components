import { NgModule, ModuleWithProviders } from '@angular/core';
import { IdRatingDisplayComponent } from './components/rating-display.component';
import { IonicModule } from '@ionic/angular';
 
@NgModule({
    imports: [
        IonicModule
    ],
    declarations: [
        IdRatingDisplayComponent
    ],
    exports: [
        
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
