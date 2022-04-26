import { Component } from "@angular/core";

@Component(
  {
    selector:'app-property-card',
    // template:`<h1> i am card </h1>`,
    templateUrl:`proerty-card.component.html`,
    // styles:['h1{font-weight:normal}']
    styleUrls:[`property-card.component.css`]

  }
)
export class PropertyCardComponent{
property:any={

  "id":1,
  "Name":"Birla House",
  "Type":"House",
  "Price":12000
}
}
