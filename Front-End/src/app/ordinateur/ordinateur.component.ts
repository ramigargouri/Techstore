import { Component, OnInit } from '@angular/core';
import ordinateur from '../_files/ordinateur.json'

@Component({
  selector: 'app-ordinateur',
  templateUrl: './ordinateur.component.html',
  styleUrls: ['./ordinateur.component.css']
})
export class OrdinateurComponent implements OnInit {
  ordinateurs:{nom :string,description: string,url:string,prix:string}[]=ordinateur;
  constructor() { }

  ngOnInit(): void {
  }

}
