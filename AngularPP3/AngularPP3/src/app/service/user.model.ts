import { ActivatedRoute, Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import { AuthService } from "./auth.service";

export class FirebaseUserModel {
    image: string;
    name: string;
    provider: string;
  

    constructor(
        public authService: AuthService,
        public af:AngularFireAuth,
        private router: Router,
      ) {
        this.af.authState.subscribe(
          (auth) => {
            if(auth != null){
              authService.isAuthenticated = true;
              this.name = auth.displayName;
              this.image = auth.photoURL;
            }
          });
      }

    tryGoogleLogin(){
        this.authService.doGoogleLogin()
        .then(res => {
          this.router.navigate(['/user']);
        })
      }
    
      logout(){
        this.authService.doLogout()
        .then((res) => {
            this.router.navigate(['/home']);
        }, (error) => {
          console.log("Logout error", error);
        });
        this.authService.isAuthenticated = false;
      }
  }