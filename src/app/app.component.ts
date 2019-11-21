import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	public tarefa = "";
	public itens = ['item 1','item 2','item 3','item 4'];

	addTarefa(){
		this.itens.push(this.tarefa);
	}

	removeTarefa(item){
		this.itens.splice(this.itens.indexOf(item), 1);
	}
}
