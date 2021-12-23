import { Pipe, PipeTransform } from '@angular/core';
import {Offer} from "./offer";

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Offers: Offer[], searchValue: string): Offer[] {
    if (!Offers || !searchValue){
      return Offers;
    }
    return Offers.filter(offer =>
    offer.category_id.toString().indexOf(searchValue.toLocaleLowerCase()) !== -1)
  }


}
