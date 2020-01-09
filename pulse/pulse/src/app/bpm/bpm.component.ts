import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-bpm',
  templateUrl: './bpm.component.html',
  styleUrls: ['./bpm.component.css']
})
export class BpmComponent {

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
