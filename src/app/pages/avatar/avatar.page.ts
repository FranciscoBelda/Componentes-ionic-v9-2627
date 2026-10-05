import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons, IonChip,
  IonContent,
  IonHeader, IonItem, IonLabel, IonList, IonMenuToggle, IonThumbnail,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonAvatar, IonBackButton, IonButton, IonButtons, IonMenuToggle, IonChip, IonLabel, IonList, IonItem, IonThumbnail]
})
export class AvatarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
