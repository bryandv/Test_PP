import { Component, OnInit } from '@angular/core';
import {Films,People,IPerson, ApiSwapiService,IFilm} from "../service/api-swapi.service";

@Component({
  selector: 'app-swapi',
  templateUrl: './swapi.component.html',
  styleUrls: ['./swapi.component.css']
})
export class SwapiComponent implements OnInit {
  people: People[];
  person: IPerson;
  films: Films[];
  
  id = 1;
  teller = 1;
  random = 1;
  url = "https://swapi.co/api/people/" + this.random + "/";
  test = 1;

  film: IFilm;

  SearchPerson: string = "1";
  PersonInfo: IPersonDisplay;

  FilmInfo: IFilmDisplay;
  lijstfilms = new Array();

  PlanetInfo: IPlanetDisplay;


  constructor(private _svc: ApiSwapiService) { }
 
  ngOnInit() {
    this.getPeople(this.teller);
    this.DoInfo(this.SearchPerson);
    
    
  }
 


  /*RandomNumber()
  {
    this.random = Math.floor((Math.random()*88)+1);
    console.log(this.random);
    this.url = "https://swapi.co/api/people/" + this.random + "/";
    this._svc.getPerson(this.url).subscribe(pers => {
    this.person = pers;
    });


    this._svc.getFilm(this.person.films[0]).subscribe(film =>{
      this.film = film;
    })

    console.log(this.person.name);
    console.log(this.person.films[0]);
    console.log(this.film.title);
  }*/
  Click()
  {
    this.teller--;
    this.getPeople(this.teller);
    console.log(this.teller);
  }
  Click2()
  {
    this.teller++;
    this.getPeople(this.teller);
    console.log(this.teller);
  }

  getPeople(size)
  {
    this._svc.getPeople(size).subscribe(result => {
      this.people = result;
    });

    //this.lijstfilms.push("test");
  
    //console.log(this.lijstfilms);
    //console.log(this.people.results[0].name);
  }


  set Searchperson(value:string)
  {
    this.SearchPerson = value;
    this.DoInfo(value);
  }

  get Searchperson()
  {
    return this.SearchPerson;
  }


  DoInfo(person:string)
  {
    console.log("test");
    this._svc.film(person).subscribe((result) => {
      console.table(result);

        this.PersonInfo = {
          name: result.name,
          gender: result.gender,
          birth_year: result.birth_year,
          films: result.films,
          homeworld: result.homeworld
          };
      console.log(this.PersonInfo.films);

        this._svc.getPlanet(this.PersonInfo.homeworld).subscribe((result) =>{
          this.PlanetInfo = {
            name: result.name
          }
          console.log(this.PlanetInfo.name);
        })

        for (let i = 0; i < this.PersonInfo.films.length; i++) {  
            this._svc.getFilm(this.PersonInfo.films[i]).subscribe((result) =>{
              this.FilmInfo ={
              name: result.title
              }
            this.lijstfilms.push(this.FilmInfo.name);
            console.log(this.FilmInfo.name);   
            })
        }

    console.log(this.lijstfilms);
    },
     (error) => {
      this.PersonInfo = null;
    })
    this.PlanetInfo.name = "";
    this.lijstfilms = [];
   // console.log(this.PersonInfo.films.length);
  }

}


export interface IPersonDisplay{
  name: string;
  gender: string;
  films: string[];
  birth_year: string;
  homeworld: string;
}

export interface IFilmDisplay{
  name: string;
}

export interface IPlanetDisplay{
  name:string;
}