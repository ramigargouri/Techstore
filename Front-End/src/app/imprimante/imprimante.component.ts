import { Component, OnInit } from '@angular/core';
import imprimante from '../_files/imprimante.json'

@Component({
  selector: 'app-imprimante',
  templateUrl: './imprimante.component.html',
  styleUrls: ['./imprimante.component.css']
})
export class ImprimanteComponent implements OnInit {
  imprimantes:{nom :string,description: string,url:string,prix:string,page:string}[]=imprimante;
  constructor() { }

  ngOnInit(): void {
  }

}
