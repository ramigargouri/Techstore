import { Component, OnInit } from '@angular/core';
import commande from '../_files/commandes.json'

@Component({
  selector: 'app-mescommandes',
  templateUrl: './mescommandes.component.html',
  styleUrls: ['./mescommandes.component.css']
})
export class MescommandesComponent implements OnInit {
  
  constructor() { }
  commandes:{id :string,date: string,detail:string,etat:string,montant:string}[]=commande;
  ngOnInit(): void {
  }

}
