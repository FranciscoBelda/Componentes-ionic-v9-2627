import {Component, model, ModelSignal, OnInit} from '@angular/core';
import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonHeader,
  IonMenuToggle,
  IonTitle,
  IonToolbar
} from "@ionic/angular";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonMenuToggle,
    IonButton,
    IonAvatar
  ],
})
export class HeaderComponent  implements OnInit {
  titulo: ModelSignal<string> = model.required();
  constructor() { }

  ngOnInit() {
  }

}
