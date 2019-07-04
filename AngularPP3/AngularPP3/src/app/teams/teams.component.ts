import { Component, OnInit } from '@angular/core';
import {Ispelers,ApiPPService, Ispeler} from "../service/api-pp.service";




@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
spelers: Ispelers;

display: boolean = false;
display2: boolean = false;
display3: boolean = false;
text: string;
id: number;

PageTeller = 0;
sort: string = "asc";
Bsort: boolean = false;
NewSpeler: Ispelers={
  name: "",
  klassement: "",
  waardeKlassement: 0
};
name: string;
klassement: string;
waardeklassement: number;

//SearchId: string = "2";
//DiplaySpeler: IDisplayspeler;


  constructor(private _svc: ApiPPService) { }

  ngOnInit() {
    this.GetSpelers(this.PageTeller);
    
  }

  showDialog(){
    this.display = true;
  }
  showDialog2(){
    this.display2 = true;
  }
  showDialog3(){
    this.display3 = true;
  }

 

  DeleteSpeler(){
    this._svc.DeleteSpeler(this.id).subscribe();
    this.display2 = false;
  }

  GetSpelers(pageteller: number){
    this._svc.getSpelers(pageteller).subscribe(result => this.spelers = result);
  }
  Update(){
    this.GetSpelers(this.PageTeller);
  }

  AddSpeler()
  {
    this.NewSpeler.name = this.name;
    this.NewSpeler.klassement = this.klassement;
    this.NewSpeler.waardeKlassement = this.waardeklassement;
    this._svc.Addspeler(this.NewSpeler).subscribe(c =>{this.NewSpeler = c;});
    
    console.log(this.name);
    console.log(this.klassement);
    console.log(this.waardeklassement);
    console.log(this.NewSpeler.name);
    console.log(this.NewSpeler.klassement);
    console.log(this.NewSpeler.waardeKlassement);
    
  }

  Next()
  {
    this.PageTeller++;
    this.GetSpelers(this.PageTeller);
    console.log("next");
  }
  Previous()
  {
    if(this.PageTeller > 0 )
      this.PageTeller--;
    this.GetSpelers(this.PageTeller);
    console.log("previous");
  }
  Sort(){
    this.Bsort = !this.Bsort;
    if(this.Bsort)
        this.sort = "desc";
    if(!this.Bsort)
        this.sort = "asc";
    this._svc.SortSpeler(this.sort).subscribe(result => this.spelers = result);
    console.log("sort");
  }

}

