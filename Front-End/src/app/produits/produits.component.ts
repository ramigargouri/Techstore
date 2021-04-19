import { Component, OnInit } from '@angular/core';
import data from '../_files/data.json';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  constructor() { }
  accessoires:{nom :string,description: string,url:string,prix:string}[]=data;
  ngOnInit(): void {
  }

}
