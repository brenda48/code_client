import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EvenOddComponent} from './components/even-odd/even-odd.component';
import {EvenOddImpurePipe} from './pipes/even-odd-impure.pipe';
import {EvenOddPurePipe} from './pipes/even-odd-pure.pipe';
import {ApiService} from './services/api.service';
import {HttpClientModule} from '@angular/common/http';
import {ConfigService} from './services/config.service';
import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {APP_CONFIG} from './base.config.module';

@NgModule({
  declarations: [
    AppComponent,
    EvenOddComponent,
    EvenOddImpurePipe,
    EvenOddPurePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],

  providers: [ApiService, ConfigService, {provide: LOCALE_ID, useValue: 'fr'},
    {provide: APP_CONFIG, useClass: ConfigService},],
  bootstrap: [AppComponent]
})
export class AppModule {
}
