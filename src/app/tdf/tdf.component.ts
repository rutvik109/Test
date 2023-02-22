import { Component } from '@angular/core';
import { User } from '../user';
import { LocalStorageService } from '../local-storage.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent {

  constructor(private localStorage : LocalStorageService,private route : ActivatedRoute,private router : Router){}


  number = this.route.snapshot.params['number'];



 company = [
  "techExtensor",
  "Google",
  "MicroSoft",
  "Amazon",
  "Adobe",
  "IBM",
  "Spotify",
  "Facebook",
 ]

  user = new User("","","","","",{"cricket": "","dancing":"","reading":"","singing":"","treaking":""},"");

  userData : any[]= [];



  OnSubmit(){
    console.log(this.user);
    this.userData.push(this.user);
    this.localStorage.setItem(this.number,this.userData);
    this.router.navigate(['reactive/'+this.number])
  }

  OnClear(){
   this.user = new User("","","","","",{"cricket": "","dancing":"","reading":"","singing":"","treaking":""},"");
  }

  OnBack(){
    this.router.navigate(['../',{relativeTo:this.route}])
  }

}
