import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe', //? The name of the custom pipe
  pure: false, //? This pipe is impure, re-evaluates on every change
})
export class FilterPipePipe implements PipeTransform {
  //? The transform method, required for implementing PipeTransform
  //? Filters an array of items based on a filter string and property name
  transform(value: any, filterString: string, propName: string): any {
    //? If the input array is empty, return it as-is
    if (value.length === 0) {
      return value;
    }
    //? Create an array to store filtered items
    const resultArray = [];
    //? Loop through each item in the input array
    for (const item of value) {
      //? Check if the property of the item matches the filter string
      if (item[propName] === filterString) {
        //? If it matches, add the item to the result array
        resultArray.push(item);
      }
    }
    //? Return the array containing filtered items
    return resultArray;
  }
}
