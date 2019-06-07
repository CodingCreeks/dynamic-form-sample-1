import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule ],
  declarations: [AppComponent, DynamicFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
