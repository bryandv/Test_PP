import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ApiPPService {
url: string = "http://localhost:55747/api/pp2";
  constructor(private _http:HttpClient) { }

  getSpelers(size=0): Observable<Ispelers>{
    return this._http.get<Ispelers>(this.url+"?page="+size);
  }

  Addspeler(speler: Ispelers): Observable<Ispelers>{
    return this._http.post<Ispelers>(this.url,speler,httpOptions);
  }

  DeleteSpeler(id): Observable<Ispelers>{
    return this._http.delete<Ispelers>(this.url +`/${id}`);
  }

  SortSpeler(sort="asc"): Observable<Ispelers>{
    return this._http.get<Ispelers>(this.url +"?sort=WaardeKlassement&dir="+sort+"&page=0&length=10");
  }

  GetSpeler(id): Observable<Ispeler>{
    return this._http.get<Ispeler>(this.url+`/${id}`);
  }
}

export interface Speler1 { 
  naam: string;
  klassement: string;
  club: string;
}

export interface Speler2 {
  naam: string;
  klassement: string;
  club: string;
}

export interface Teams{
  speler1: Speler1;
  speler2: Speler2;
  totaalwaarde: number;
}

export interface Ispelers {
  id?: number;
  name: string;
  klassement: string;
  waardeKlassement: number;
  club?: any;
}

export interface Club {
  id: number;
  name: string;
  location: string;
}

export interface Ispeler {
  id: number;
  name: string;
  klassement: string;
  waardeKlassement: number;
  club: Club;
}