import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { tap, delay, catchError } from 'rxjs/operators';
import { LoadingSpinnerService, EmitEvent, Events } from './loading-spinner.service';
@Injectable()
export class LoadingSpinnerInterceptor implements HttpInterceptor {

  constructor(private loadingSpinner: LoadingSpinnerService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingSpinner.emit(new EmitEvent(Events.httpRequest));
    return next
      .handle(request)
      .pipe(
        tap(event => {
          console.log('here');
          if (event instanceof HttpResponse) {
            console.log('there');
            this.loadingSpinner.emit(new EmitEvent(Events.httpResponse));
          }
        }),
        catchError(err => {
          this.loadingSpinner.emit(new EmitEvent(Events.httpResponse));
          return of(null);
        })
      );
  }
}
