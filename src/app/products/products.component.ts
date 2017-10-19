import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes} from '@angular/animations';
import { NgForm } from '@angular/forms';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    trigger('productsAnim', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({transform: 'translateX(-30px)', opacity: '0'}),
        animate('700ms ease-in-out')
      ]),
      transition('* => void', [
        animate('300ms ease-in-out', style({transform: 'translateX(-30px)', opacity: '0'}))
      ])
    ])
  ]
})
export class ProductsComponent {

  constructor(private productService: ProductsService){}
  
  products = this.productService.products;

  title:string = '';
  description:string = '';
  state = 'active';

  addProduct(form: NgForm) {
    var product = {'title': form.value.title, 'description': form.value.description}
    this.productService.addProduct(product);
    this.title = '';
    this.description = '';
  }

  removeProduct(i) {
    this.productService.removeProduct(i);
  }

}
