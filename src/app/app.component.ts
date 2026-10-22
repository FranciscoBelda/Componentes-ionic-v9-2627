import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import {addIcons} from "ionicons";
import {
  albums,
  americanFootball,
  beaker,
  car,
  card,
  ellipsisHorizontalOutline,
  grid, infinite, infiniteOutline, list,
  logoAppleAppstore, phonePortrait
} from "ionicons/icons";
import {MenuComponent} from "./components/menu/menu.component";
import {register} from "swiper/element/bundle";
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, MenuComponent],
})
export class AppComponent {
  constructor() {
    addIcons({card, beaker, americanFootball, grid, logoAppleAppstore, car, albums,
      ellipsisHorizontalOutline, list, infinite, infiniteOutline, phonePortrait});
  }
}
