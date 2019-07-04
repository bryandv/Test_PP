import { Component, OnInit } from '@angular/core';
import { FirebaseUserModel } from '../service/user.model';
import { AuthService } from '../service/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: FirebaseUserModel = new FirebaseUserModel(this.authService, this.af, this.router);
  constructor(
    public authService: AuthService,
    public af:AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {

  }

  

}