import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButton,
  IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol,
  IonContent, IonGrid,
  IonHeader,
  IonIcon, IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {HeaderComponent} from "../../components/header/header.component";
import {addIcons} from "ionicons";
import {heart, star} from "ionicons/icons";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-grid-buttons',
  templateUrl: './grid-buttons.page.html',
  styleUrls: ['./grid-buttons.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonButtons, IonBackButton, IonButton, IonIcon, IonGrid, IonRow, IonCol, RouterLink, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent]
})
export class GridButtonsPage implements OnInit {

  constructor() { addIcons({star, heart})}

  ngOnInit() {
  }

}
