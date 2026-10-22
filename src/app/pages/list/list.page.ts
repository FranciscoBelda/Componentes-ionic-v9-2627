import {Component, inject, OnInit, signal, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonContent,
  IonHeader, IonIcon,
  IonImg,
  IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel,
  IonList,
  IonListHeader, IonReorder, IonReorderGroup, IonText,
  IonTitle, IonToggle,
  IonToolbar
} from '@ionic/angular';
import {DataService} from "../../services/data-service";
import {Usuario} from "../../common/interfaces";
import {HeaderComponent} from "../../components/header/header.component";
import {addIcons} from "ionicons";
import {heart, shareSocial, call} from "ionicons/icons";

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  imports: [IonContent, CommonModule, FormsModule, HeaderComponent, IonList, IonListHeader, IonItem, IonAvatar, IonLabel, IonItemSliding, IonItemOptions, IonItemOption, IonIcon, IonReorderGroup, IonToggle, IonText, IonReorder]
})
export class ListPage implements OnInit {
  @ViewChild('lista') lista!: IonList;
  private readonly dataService: DataService = inject(DataService);
  usuarios = signal<Usuario[]>([]);
  habilitado: boolean = true;

  constructor() {
    addIcons({shareSocial, heart, call})
  }

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers() {
    this.dataService.getUsers().subscribe(
      {
        next: data => {
          this.usuarios.set(data);
        },
        error: error => {
          console.error(error);
        },
        complete: () => {
          console.log('Users Loaded');
        }
      }
    )
  }

  favorite(user: Usuario) {
    console.log('Favorite clicked')
    this.lista.closeSlidingItems();
  }
  share(user: Usuario) {
    console.log('share clicked')
    this.lista.closeSlidingItems();
  }
  call(user: Usuario) {
    console.log('Call clicked')
    this.lista.closeSlidingItems();
  }

  reordenar(event: any) {
    this.usuarios.update(items => {
      // Creamos un nuevo array con el operador spread ([...])
      const nuevosItems = [...items];

      const [itemMover] = nuevosItems.splice(event.detail.from, 1);
      nuevosItems.splice(event.detail.to, 0, itemMover);

      // Devolvemos la nueva referencia
      return nuevosItems;
    });
    event.target.complete();
  }
}
