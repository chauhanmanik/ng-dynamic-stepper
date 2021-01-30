import { BrowserModule   } from '@angular/platform-browser';
import { NgModule        } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { AngularMaterialModule       } from './shared/angular-material.module';
import { AppRoutingModule            } from './app-routing.module';
import { AppComponent                } from './app.component';
import { CreateStep1Component        } from './orders/create-step1/create-step1.component';
import { CreateStep2Component        } from './orders/create-step2/create-step2.component';
import { CreateStepperComponent      } from './orders/create-stepper/create-stepper.component';
import { DynamicStepperModule        } from '../../projects/dynamic-stepper/src/lib/dynamic-stepper.module';

@NgModule({
  declarations: [
    AppComponent,
    CreateStepperComponent,
    CreateStep1Component,
    CreateStep2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicStepperModule,
    AngularMaterialModule,
    TranslateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
