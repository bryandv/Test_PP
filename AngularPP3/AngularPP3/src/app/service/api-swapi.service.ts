import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiSwapiService {

  constructor(private _http:HttpClient) { }

  getPeople(size=1):Observable<People[]>{
    return this._http.get<People[]>("https://swapi.co/api/people/?page="+size)
  }
  getFilms(){
    return this._http.get<Films[]>("https://swapi.co/api/films")
  }
  getFilm(url: string)
  {
    return this._http.get<IFilm>(url);
  }

  film(id:string){
    return this._http.get<IPerson>("https://swapi.co/api/people/"+id+"/");
  }

  getPlanet(url:string)
  {
    return this._http.get<IPlanet>(url);
  }
}


export interface Result {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}

export interface People {
  count: number;
  next: string;
  previous?: any;
  results: Result[];
}




export interface Result2 {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: Date;
  edited: Date;
  url: string;
}

export interface Films {
  count: number;
  next?: any;
  previous?: any;
  results: Result2[];
}

export interface IPerson {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: any[];
  starships: any[];
  created: Date;
  edited: Date;
  url: string;
}


export interface IFilm {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: Date;
  edited: Date;
  url: string;
}

export interface IPlanet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}