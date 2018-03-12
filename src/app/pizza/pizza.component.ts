import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

import {Pizza} from '../Model/pizza.model';
import {PizzaService} from '../Service/pizzaService.service';
import { Observable } from 'rxjs/Observable';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-pizza',
  templateUrl:'./pizza.component.html'
})

export class PizzaComponent implements OnInit {
  data: any;
  regName="Name:Regina Pizza";
  ReginaImg="../../assets/images/chilly.png";
  Regina="Ingredients:Tomato,fromage,jambon,olives";

  mexiName="Name:Mexicain Pizza ";
  mexiImg="../../assets/images/packet.jpg";
  mexi="Ingredients:Tomato,fromage,pepperoni,merguez,olives,poivrons,origan";

  pyaName="Name:Pyasanne Pizza";
  PyasanneImg="../../assets/images/vistino.jpg";
  pyas="Ingredients:Creme fraiche,fromagejambone,pommes de terre";

  vegName="Name:Vegetatien Pizza";
  vegetarienImg="../../assets/images/pannir.jpg";
  veg="Ingredients:Tomato,onion,jambon, olives,  Creme fraiche,fromagejambone";
rname;rdata=[];
pname;pdata=[];
vname;vdata=[];
mname;mdata=[];
  constructor(private pizzaService:PizzaService)  { 
   this.rname= this.rdata.push(this.regName,this.Regina);
   this.pname= this.pdata.push(this.pyaName,this.pyas);
   this.vname= this.vdata.push(this.vegName,this.veg);
   this.mname= this.mdata.push(this.mexiName,this.mexi);
   this.pizzaService.GetPots().subscribe(posts => {this.data = posts})
  }

  public recentMovie;
  public cart=[];


  orderRegina()
  {
    this.recentMovie=this.Regina;
    this.cart.push(this.rdata);
  }
  orderMexi()
  {
    this.recentMovie=this.mexi;
    this.cart.push(this.mdata);
  }
  orderveg()
  {
    this.recentMovie=this.veg;
    this.cart.push(this.vdata);
  }
  orderpyas()
  {
    this.recentMovie=this.pyas;
    this.cart.push( this.pdata);
  }
  ConfirmOrder()
  {
    alert("Your Order placed successfully.....!!! and Pizza will deliverd in 60 min");
  }
  ngOnInit() {
  }
}
