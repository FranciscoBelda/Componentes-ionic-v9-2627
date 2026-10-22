import {Component, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonList,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
  imports: [IonContent, CommonModule, FormsModule, HeaderComponent, IonList, IonItem, IonInfiniteScroll, IonInfiniteScrollContent]
})
export class InfiniteScrollPage implements OnInit {
  miArrayAux = Array(100);
  miArray= signal<any[]>([]);
  constructor() { }

  ngOnInit() {
    this.miArray.update(data => [...data, ...this.miArrayAux.splice(0, 20)]);
  }


  loadMore(event: any) {
    event.target.complete();
    if (this.miArrayAux.length <= 10) {
      this.miArray.update(data => [...data, ...this.miArrayAux]);
      event.target.disabled = true;
    }    else {
      this.miArray.update(data => [...data, ...this.miArrayAux.splice(0, 10)]);
    }

  }
}
