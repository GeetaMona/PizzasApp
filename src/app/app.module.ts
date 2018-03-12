import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule,Route} from '@angular/router';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import {PizzaService} from './Service/pizzaService.service';
import { HomeComponent } from './home/home.component';
import { Pizza } from './Model/pizza.model';

const myRoute:Route[]=[{path:'Home',component:HomeComponent},
{path:'Categories',component:PizzaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
