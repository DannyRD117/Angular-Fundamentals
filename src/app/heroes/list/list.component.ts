import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  heroes: string[] = ['Spiderman','Ironman','Hulk', 'Thor', 'Captian America']
  edad:number = 0
  heroeBorrado:string = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
