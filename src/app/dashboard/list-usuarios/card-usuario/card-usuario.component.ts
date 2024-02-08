import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrl: './card-usuario.component.css'
})
export class CardUsuarioComponent  implements OnInit{
  imgUrl= 'https://loremflickr.com/200/200/girl'

  @Input() usuario: any 
  name:string;
  species:string;
  image:string;
  id:number

  constructor(){
    this.name =  ''
    this.species =  ''
    this.image =  ''
    this.id =  0
  }

  ngOnInit(): void {
    this.name =  this.usuario.name
    this.species =  this.usuario.species
    this.image =  this.usuario.image
    this.id =  this.usuario.id  
  }


}
