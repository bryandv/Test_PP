import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service'
import { Router, Params } from '@angular/router';
import { FirebaseUserModel } from '../service/user.model';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: FirebaseUserModel = new FirebaseUserModel(this.authService, this.af, this.router);
  constructor(public authService: AuthService,
    public af:AngularFireAuth,
    private router: Router,) { }

  ngOnInit() {
  }
  tryGoogleLogin(){
    this.authService.doGoogleLogin()
    .then(res => {
      this.router.navigate(['/user']);
    })
  }
}
