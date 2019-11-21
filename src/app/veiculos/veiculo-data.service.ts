import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeiculoDataService {

  constructor() { }

  private veiculoSource = new BehaviorSubject({ veiculo: null, key: ''});
  veiculoAtual = this.veiculoSource.asObservable();

  obtemVeiculo(veiculo: Veiculo, key: string){
  	this.veiculoSource.next({ veiculo: veiculo, key: key});
  }
}
