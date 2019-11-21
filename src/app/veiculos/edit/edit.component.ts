import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

	veiculo: Veiculo;
	key: string = '';

  constructor(private _veiculoService: VeiculoService,
  	private _veiculoDataService: VeiculoDataService) { }

  ngOnInit() {
  	this.veiculo = new Veiculo();
  	this._veiculoDataService.veiculoAtual.subscribe(data =>{
  		if( data.veiculo && data.key) {
  			this.veiculo = new Veiculo();
  			this.veiculo.placa = data.veiculo.placa;
  			this.veiculo.chassi = data.veiculo.chassi;
  			this.veiculo.renavam = data.veiculo.renavam;
  			this.veiculo.modelo = data.veiculo.modelo;
  			this.veiculo.marca = data.veiculo.marca;
  			this.veiculo.ano = data.veiculo.ano;
  			this.key = data.key;  			
  		}
  	})
  }
  OnSubmit(){

  	if(this.key){
  		this._veiculoService.update(this.veiculo, this.key);
  	}else {
  		this._veiculoService.insert(this.veiculo);
  	}

  	this.veiculo = new Veiculo();
  	this.key = null;
  }
}
