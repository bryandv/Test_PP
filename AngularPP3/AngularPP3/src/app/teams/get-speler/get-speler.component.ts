import { Component, OnInit } from '@angular/core';
import {Ispelers,ApiPPService, Ispeler} from "../../service/api-pp.service";


@Component({
  selector: 'app-get-speler',
  templateUrl: './get-speler.component.html',
  styleUrls: ['./get-speler.component.css']
})
export class GetSpelerComponent implements OnInit {

  searchPerson: string = "1";
  personinfo: IDisplayspeler;

  constructor(private svc:ApiPPService) { }

  ngOnInit() {
    this.Search(this.searchPerson);
  }


  set SearchPerson(value:string){
    this.searchPerson = value;
    this.Search(value);
  }

  get SearchPerson(){
    return this.searchPerson;
  }

  Search(person:string)
  {
    this.svc.GetSpeler(person).subscribe((result) => {
      console.table(result);
      this.personinfo={
        id: result.id,
        name: result.name,
        klassement: result.klassement,
        waardeKlassement: result.waardeKlassement
      };
      console.table(this.personinfo);

    },(error) => {
      this.personinfo = null;
    })
  }

}


export interface DisplayClub {
  id: number;
  name: string;
  location: string;
}

export interface IDisplayspeler {
  id: number;
  name: string;
  klassement: string;
  waardeKlassement: number;
  club?: DisplayClub;
}
