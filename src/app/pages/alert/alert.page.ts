import {Component, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  AlertButton,
  AlertInput,
  IonAlert,
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonButton, IonAlert]
})
export class AlertPage implements OnInit {
  titulo = signal<string>("");
  botonesAlert: AlertButton[] = [
    {
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
        console.log('Cancel clicked');
      }
    }, {
      text: 'OK',
      handler: () => {
        console.log('OK clicked');
      }
    }
  ];
  botonesInput: AlertButton[] = [
    {
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
        console.log('Cancel clicked');
      }
    }, {
      text: 'OK',
      handler: (data) => {
        console.log('OK clicked', data);
        this.titulo.set(data.nombre);
      }
    }
  ];
  inputs: AlertInput[] = [
    {
      name: 'nombre',
      type: 'text',
      placeholder: 'Nombre',
    }
  ];

  radioButtons = [{
    text: 'Cancelar', role: 'cancel', handler: () => {
      console.log('Confirmado Cancelar');
    }
  }, {
    text: 'Ok', handler: (data: any) => {
      console.log('Confirmado Ok y color: ', data);
    }
  }];
  public radioInputs =
    [
      {label: 'Red', type: 'radio', value: 'rojo',},
      {
    label: 'Blue',
    type: 'radio',
    value: 'azul',
  }, {label: 'Green', type: 'radio', value: 'verde',},];

  constructor() {
  }

  ngOnInit() {
  }

}
