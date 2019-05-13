import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewController } from '@ionic/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-insert-coin',
  templateUrl: './insert-coin.component.html',
  styleUrls: ['./insert-coin.component.scss'],
})
export class InsertCoinComponent implements OnInit {
  @ViewChild('container') container;

  constructor(private modal: ModalController) { }

  ngOnInit() { }

  dismiss(event, force: boolean = false) {
    if (force || event.target == this.container.nativeElement) {
      this.modal.dismiss();
    }
  }

  selectCoin(value: number) {
    this.modal.dismiss(value);
  }
}
