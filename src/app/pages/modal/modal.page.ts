import {Component, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader, IonInput, IonItem,
  IonItemDivider, IonLabel, IonList, IonListHeader,
  IonModal,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonButton, IonItemDivider, IonModal, IonButtons, IonList, IonListHeader, IonLabel, IonItem, IonInput]
})
export class ModalPage {
  @ViewChild(IonModal) modal!: IonModal;
  usuario = {nombre: "", email: "", ciudad: "" };
  message = 'Abra el modal y rellene los datos';

  constructor() { }


  onWillDismiss(event: CustomEvent) {
    const ev = event as CustomEvent;
    console.log(ev);
    if (ev.detail.role === 'confirm'){
      this.message = 'Hola, '+ev.detail.data;
    }
  }

  cancel() {
      this.modal.dismiss(null, 'cancel');
  }

  onSubmitTemplate() {
    this.modal.dismiss(this.usuario.nombre, 'confirm');
  }
}
