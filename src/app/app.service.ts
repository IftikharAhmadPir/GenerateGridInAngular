import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  data: any;
  sample: any;
  constructor(private http: HttpClient) { }

  getvalue(): any {
    return this.sample = [{ "Id" : "03","Name" : "Cftikhar", "Contact" : "33333422544"},
                          { "Id" : "01","Name" : "Aftikhar", "Contact" : "13333422544"},
                          { "Id" : "02","Name" : "Bftikhar", "Contact" : "23333422544"},
                          { "Id" : "04","Name" : "Dftikhar", "Contact" : "43333422544"},
                          { "Id" : "06","Name" : "Fftikhar", "Contact" : "63333422544"},
                          { "Id" : "05","Name" : "Eftikhar", "Contact" : "53333422544"},
                          { "Id" : "07","Name" : "Gftikhar", "Contact" : "73333422544"},
                          { "Id" : "08","Name" : "Hftikhar", "Contact" : "83333422544"},
                         ];
  }
}
