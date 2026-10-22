import {Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonAvatar, IonContent, IonHeader, IonLabel, IonTitle, IonToolbar} from '@ionic/angular';
import {HeaderComponent} from "../../components/header/header.component";
import {ToastService} from "../../services/toast-service";

@Component({
  selector: 'app-slides2',
  templateUrl: './slides2.page.html',
  styleUrls: ['./slides2.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, CommonModule, FormsModule, HeaderComponent, IonAvatar, IonLabel]
})
export class Slides2Page implements OnInit {
  private readonly toastService: ToastService = inject(ToastService);
  constructor() { }

  ngOnInit() {
  }

  swiperClick(event: PointerEvent, a: string) {
    this.toastService.mostrarToast('Ha clicado el elemento '+a, 1500, 'success', 'top');

  }
}
