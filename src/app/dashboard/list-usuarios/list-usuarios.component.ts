import { Component, OnInit, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrl: './list-usuarios.component.css'
})
export class ListUsuariosComponent implements OnInit{
  private _usuarioService = inject(UsuarioService)
  listUsuarios: any[] = [];
  loading = false

  ngOnInit(): void {
    this.getUsuarios()
  }
  

  getUsuarios(){
    this.loading = true
    this._usuarioService.getUsuarios().subscribe({
      next : ((data)=>{
        console.log("data", data)
        this.listUsuarios = data.results
      }), 
      error: ((err) => {
        console.log(err)
      }),
      complete : (()=> {
        this.loading = false 
      })
    })
  }
}
