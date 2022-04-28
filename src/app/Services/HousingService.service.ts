import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {map}  from 'rxjs/operators'
import { Iproperty } from '../property/iProperty.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HousingServiceService {

constructor(private Http:HttpClient) {


}
GetProperties(SellRent:number):Observable<Iproperty[]>
{
  return this.Http.get('data/properties.json').pipe(
  map(data=>{
    const propertiesarray :Array<Iproperty>=[];
    for(const id in data)
    {
      if(data.hasOwnProperty(id) && data[id].SellRent==SellRent)
      {
     propertiesarray.push(data[id]);
      }
    }
    return propertiesarray;
  })
  );

}

}
