import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import swal from 'sweetalert2'

const swalWithBootstrapButtons = swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',

})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];


  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }
 
  public delete(cliente: Cliente): void {
    swalWithBootstrapButtons.fire({
      title: 'Estás seguro?',
      text: `Seguro que desea eliminar al cliente ${cliente.nombre} ${cliente.apellido}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        //si dice que si se manda a llamar al método delete del cliente service
        this.clienteService.delete(cliente.id).subscribe(
          response => {
            //para actualizar la lista después de eliminar al cliente se agrega esta linea
            this.clientes = this.clientes.filter(cli => cli !== cliente)

            swalWithBootstrapButtons.fire(
              'Cliente eliminado!',
              `Cliente ${cliente.nombre} eliminado con éxito`,
              'success'
            )
          }
        )

        
      } 
    })

  }

}
