import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor(private _angularFireDatabase: AngularFireDatabase) { }

  insert(veiculo: Veiculos){
  	this._angularFireDatabase.list("veiculos").push(veiculo)
  		.then((result: any) =>{
  			console.log(result.key);
  		})
  }

  update(veiculo: Veiculo, key: string){
  	this._angularFireDatabase.list("veiculos").update(key, veiculo);
  }

  getAll(){
  	return this._angularFireDatabase.list("veiculos")
  		.snapshotChanges()
  		.pipe(
  			map(change =>{
  				return changes.map(data =>({ key: data.payload.key, ...data.payload.val() }));
  			})
  		)
  }

  delete(key: string){
  	this._angularFireDatabase.object('veiculo/${key}').remove();
  }

}
