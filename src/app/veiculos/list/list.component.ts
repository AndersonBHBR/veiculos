import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	veiculos: Observable<any>;

  constructor(private _veiculoService: VeiculoService,
  			  private _veiculoDataService: VeiculoDataService) { }

  ngOnInit() {
  	this.veiculos = this._veiculoService.getAll();
  }

  delete(key: string){
  	this._veiculoService.delete(key);
  }

  edit(veiculo: Veiculo, key: string){
  	this._veiculoDataService.obtemVeiculo(veiculo, key);
  }

}
