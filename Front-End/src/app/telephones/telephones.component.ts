import { Component, OnInit } from '@angular/core';
import telephone from '../_files/telephone portable.json'

@Component({
  selector: 'app-telephones',
  templateUrl: './telephones.component.html',
  styleUrls: ['./telephones.component.css']
})
export class TelephonesComponent implements OnInit {
  telephones:{nom :string,description: string,url:string,prix:string}[]=telephone;
  constructor() { }

  ngOnInit(): void {
  }

}
