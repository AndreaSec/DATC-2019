import { Component, OnInit } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class DataComponent {

  public display: boolean = false;

  onClick() {
    this.display=!this.display;
    console.log(this.display);
  }
}
