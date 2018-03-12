import {Pizza} from '../Model/pizza.model';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PizzaService{
    
    Pizzas:Pizza[];

    constructor(private http:Http)
    {
       
    }
    // get json file data 
    GetPots()
    {
        return this.http.get('http://localhost:4200/assets/Service/pizzaData.json').map(result => result.json());
    }
  
    //get json file data by perticular Name
    GetPostId(Name:any) 
    {
        return this.http.get('http://localhost:4200/assets/Service/pizzaData.json'+Name).map(result => result.json());;
    }





}