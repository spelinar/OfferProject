import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ApplicationModule} from "@angular/core";
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { SearchfilterPipe } from './searchfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchfilterPipe,
  ],
  imports: [
    BrowserModule,
    ApplicationModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
