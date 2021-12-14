import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': 'a087c82fa8msh5ac1c3b4e02f0d7p1894d4jsnbbfc5baefc55',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      },
      setParams: {
        key: '571a9477bc8943a2a3e8702aa1f8f957',
      },
    });
    return next.handle(req);
  }
}
