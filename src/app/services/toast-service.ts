import {inject, Service} from '@angular/core';
import {ToastController} from "@ionic/angular";

@Service()
export class ToastService {
  private readonly toastCTrl: ToastController = inject(ToastController);

  async mostrarToast(mes: string, duration: number, color: string, position: 'top' | 'bottom' | 'middle') {
    const toast = await this.toastCTrl.create({
      message: mes,
      duration,
      position,
      color
    })
    await toast.present();
  }
}
