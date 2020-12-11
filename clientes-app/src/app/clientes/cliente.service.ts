
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { Observable, of } from 'rxjs';

export class ClienteService {

  constructor() { }

  getClientes(): Observable <Cliente[]> {

    return of (CLIENTES);
  }

}
