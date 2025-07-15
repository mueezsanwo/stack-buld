import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
   provideToastr({
  positionClass: 'toast-bottom-right',
  timeOut: 3000,
  progressBar: true,
  easeTime: 300,
  closeButton: true,
  toastClass: 'ngx-toastr toast fadeIn'
})

  ]
};
