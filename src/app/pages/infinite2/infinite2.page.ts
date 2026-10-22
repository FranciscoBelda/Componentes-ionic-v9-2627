import {Component, inject, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  InfiniteScrollCustomEvent, IonAvatar, IonBadge,
  IonContent,
  IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList,
  IonTitle,
  IonToolbar,
  LoadingController
} from '@ionic/angular';
import {DataService} from "../../services/data-service";
import {Movie} from "../../common/models/movie.model";
import {environment} from "../../../environments/environment";
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-infinite2',
  templateUrl: './infinite2.page.html',
  styleUrls: ['./infinite2.page.scss'],
  imports: [IonContent,CommonModule, FormsModule, HeaderComponent, IonList, IonItem, IonAvatar, IonLabel, IonBadge, IonInfiniteScroll, IonInfiniteScrollContent]
})
export class Infinite2Page implements OnInit {
  private readonly dataService: DataService = inject(DataService);
  movies = signal<Movie[]>([]);
  currentPage = signal(1);
  imageUrl = environment.images;
  private readonly loadingCtrl = inject(LoadingController);


  constructor() { }

  ngOnInit() {
    this.loadMovies();
  }

  async loadMovies(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles'
    });
    await loading.present();

    this.dataService.getMovies(this.currentPage()).subscribe(
      {
        next: data => {
          loading.dismiss();
          this.movies.update(items => [...items, ...data.results])
          event?.target.complete();
          if (event){
            event.target.disabled = data.total_pages === this.currentPage();
          }
        },
        error: error => {
          console.error(error);
        }
      }
    )
  }

  loadMore(event: InfiniteScrollCustomEvent){
    this.currentPage.update(pag => pag +1);
    this.loadMovies(event);
  }
}
