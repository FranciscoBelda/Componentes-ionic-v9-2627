import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonFab,
  IonFabButton, IonFabList, IonFooter,
  IonHeader, IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {HeaderComponent} from "../../components/header/header.component";
import {addIcons} from "ionicons";
import {add, logoFacebook, logoGithub, logoGoogle, logoInstagram, logoTiktok, logoYoutube} from "ionicons/icons";

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
  imports: [IonContent, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonList, IonItem, IonLabel, IonFab, IonFabButton, IonIcon, IonFabList, IonFooter]
})
export class FabPage implements OnInit {
  datos = Array(100);

  constructor() {
    addIcons({add, logoFacebook, logoGoogle, logoGithub, logoTiktok, logoYoutube, logoInstagram})
  }

  ngOnInit() {
  }

}
