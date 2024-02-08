import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit{
  id: number
  name:string;
  species:string;
  image:string;
  gender:string;
  location:string;
  status:string;
  loading:boolean
  

  constructor(private activatedRoute: ActivatedRoute, private _usuarioService:UsuarioService){
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.name =  ''
    this.species =  ''
    this.image =  ''
    this.gender =  ''
    this.location =  ''
    this.status =  ''
    this.loading = true
  }
  ngOnInit(): void {
    this.getUsuario()
  }

  getUsuario(){
    this._usuarioService.getUsuario(this.id).subscribe(
      {
        next: (data)=>{
          console.log("usuario " + this.id , data )
          this.name = data.name
          this.species = data.species
          this.image = data.image
          this.gender = data.gender
          this.location = data.location.name
          this.status = data.status
        },    
        error: (error) =>{
          console.log(error)
        },
        complete: ()=>{
          this.loading = false
        }
      })
  }

}
