import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './Scenario1/component1/component1.component';
import { Component2Component } from './Scenario2/component2/component2.component';
import { Component3Component } from './Scenario3/component3/component3.component';
import { Component4Component } from './Scenario3/component3/component4/component4.component';
import { Component5Component } from './Scenario4/component5/component5.component';
import { Component6Component } from './Scenario4/component5/component6/component6.component';
import { Component7Component } from './Scenario5/component7/component7.component';
import { Component8Component } from './Scenario5/component7/component8/component8.component';
import { Component9Component } from './Scenario5/component7/component8/component9/component9.component';
import { Component10Component } from './Scenario6/component10/component10.component';
import { Component11Component } from './Scenario6/component10/component11/component11.component';
import { Component12Component } from './Scenario6/component10/component12/component12.component';


@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
    Component5Component,
    Component6Component,
    Component7Component,
    Component8Component,
    Component9Component,
    Component10Component,
    Component11Component,
    Component12Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
