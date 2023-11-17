import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroceriesListComponent } from './groceries-list/groceries-list.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    GroceriesListComponent,
    ItemFormComponent,
    AddItemComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
