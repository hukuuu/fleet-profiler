import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppState } from './app.service';
import {GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/src/core';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        routing
    ], providers: [
        appRoutingProviders,
        HTTP_PROVIDERS,
        AppState,
        GOOGLE_MAPS_PROVIDERS
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }