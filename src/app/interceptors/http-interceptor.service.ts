import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Modify or log the request before sending
    console.log('Intercepted request:', request.headers.get('Custom-Header'));
    if(request.headers.get('Custom-Header') == 'IsOrderAppAPI') {
       let baseURL = environment.orderApiUrl;
          let modifiedHeaders = request.headers
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          const copiedReq = request.clone({url: baseURL+request.url, headers: modifiedHeaders });
          return next.handle(copiedReq);
     } else  if(request.headers.get('Custom-Header') == 'IsInventoryAppAPI') {
      let baseURL = environment.inventoryApiUrl;
         let modifiedHeaders = request.headers
         .set('Content-Type', 'application/json')
         .set('Accept', 'application/json')
         const copiedReq = request.clone({url: baseURL+request.url, headers: modifiedHeaders });
         return next.handle(copiedReq);
    } else {
    // Clone the request to modify it
    const modifiedRequest = request.clone({
      headers: request.headers.set('Authorization', 'Bearer YOUR_ACCESS_TOKEN')
    });

    // Pass the modified request to the next interceptor or to the server
    return next.handle(modifiedRequest).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          // Log the response
          console.log('Intercepted response:', event);
        }
      })
    );
     }
  }
}
