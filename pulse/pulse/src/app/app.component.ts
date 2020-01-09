import { Component } from '@angular/core';
import {AngularFireDatabase, snapshotChanges} from '@angular/fire/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  BPM1: object;
  BPM:any[];
  
  constructor(db: AngularFireDatabase) {
    db.list('/BPM')
    .snapshotChanges().subscribe(BPM => {
      this.BPM = BPM;
      console.log(this.BPM);
    }); 

  }
}

