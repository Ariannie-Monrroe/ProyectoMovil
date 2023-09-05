import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@awesome-cordova-plugins/barcode-scanner/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner) {
    // this.barcodeScanner.scan().then(barcodeData => {
    //   console.log('Barcode data', barcodeData);
    // }).catch(err => {
    //   console.log('Error', err);
    // });
  }
  async scanQRCode() {
    const options: BarcodeScannerOptions = {
      // Opciones de escaneo
    };

    try {
      const result = await this.barcodeScanner.scan(options);
      if (!result.cancelled) {
        console.log('Resultado del escaneo:', result.text);
      }
    } catch (error) {
      console.error('Error al escanear:', error);
    }
  }
}
