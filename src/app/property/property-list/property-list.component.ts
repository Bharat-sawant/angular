import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingServiceService } from 'src/app/Services/HousingService.service';
import { Iproperty } from '../iProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
SellRent=1;
  properties:Array<Iproperty>=[];

  constructor(private route:ActivatedRoute, private housingServiceService:HousingServiceService) { }

  ngOnInit(): void {
    if( this.route.snapshot.url.toString())
    {
      this.SellRent=2;
    }

    this.housingServiceService.GetProperties(this.SellRent).subscribe(data=>{

      console.log(data)
      console.log(this.route.snapshot.url.toString());
      this.properties=data;
    },error=>{console.log(error)}
    );
  }




}
