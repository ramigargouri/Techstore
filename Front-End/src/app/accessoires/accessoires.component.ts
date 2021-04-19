import { Component, OnInit } from '@angular/core';
import accesoire from '../_files/accessoire.json';
@Component({
  selector: 'app-accessoires',
  templateUrl: './accessoires.component.html',
  styleUrls: ['./accessoires.component.css']
})
export class AccessoiresComponent implements OnInit {
  accessoires:{nom :string,description: string,url:string,prix:string,page:string}[]=accesoire;

  constructor() { }

  ngOnInit(): void {
  }

}
