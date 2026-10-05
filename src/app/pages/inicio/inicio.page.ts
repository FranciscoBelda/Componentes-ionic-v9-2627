import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader, IonMenuButton,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {DataService} from "../../services/data-service";
import {Componente} from "../../common/interfaces";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonListHeader, IonItem, IonIcon, IonLabel, RouterLink, IonButtons, IonMenuButton]
})
export class InicioPage implements OnInit {
  dataService: DataService = inject(DataService);
  componentes: WritableSignal<Componente[]> = signal<Componente[]>([]);

  constructor() {
  }

  ngOnInit() {
    this.cargarComponentes();
  }

  private cargarComponentes() {
    this.dataService.getComponentes().subscribe(
      {
        next: (data) => {
          this.componentes.set(data);
        },
        error: (err) => {
          console.error(err);
        },
        complete: () => {
          console.log('Componentes cargados');
          console.log(this.componentes());
        }
      }
    )
  }
}
