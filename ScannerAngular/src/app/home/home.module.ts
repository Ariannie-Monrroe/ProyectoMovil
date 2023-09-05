import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage],
  providers: [
    BarcodeScanner, // Agrega BarcodeScanner a la lista de proveedores
    // ...
  ],

})
export class HomePageModule { }
