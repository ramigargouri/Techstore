import { Component, OnInit } from '@angular/core';
import televiseur from '../_files/televiseur.json'

@Component({
  selector: 'app-televiseur',
  templateUrl: './televiseur.component.html',
  styleUrls: ['./televiseur.component.css']
})
export class TeleviseurComponent implements OnInit {
  televiseurs:{nom :string,description: string,url:string,prix:string}[]=televiseur;
  constructor() { }

  ngOnInit(): void {
  }

}
