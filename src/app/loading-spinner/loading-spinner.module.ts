import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerInterceptor } from './loading-spinner.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class LoadingSpinnerModule {
  constructor(@Optional() @SkipSelf() parentModule: LoadingSpinnerModule) {

  }
}
