import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(public oHttpClient: HttpClient) { }
  
  fetchinventoryData(url:string = ''): Observable<any> {
    const customHeaders = new HttpHeaders().set('Custom-Header', 'IsInventoryAppAPI');
    const obs = new Observable(observer => {
      this.oHttpClient.get<any>(url, { headers: customHeaders }).pipe(map((data: any) => {
                    let result = data.Key.toLowerCase();
                    
                return result;
        })).subscribe(data => {
            observer.next(data);
        }, error => {
            observer.error(error);
        });
      });
    return obs;
  }

  fetchorderData(url:string = ''): Observable<any> {
    const customHeaders = new HttpHeaders().set('Custom-Header', 'IsOrderAppAPI');
    const obs = new Observable(observer => {
      this.oHttpClient.get<any>(url, { headers: customHeaders }).pipe(map((data: any) => {
                    let result = data.Key.toLowerCase();
                return result;
        })).subscribe(data => {
            observer.next(data);
        }, error => {
            observer.error(error);
        });
      });
    return obs;
  }
}
