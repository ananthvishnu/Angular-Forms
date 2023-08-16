import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten', //? The name of the custom pipe
})
//?export custom pipe class
export class shortenPipe implements PipeTransform {
  //? The transform method, required for implementing PipeTransform
  //? Shortens the input string if its length exceeds a specified limit
  transform(value: any, limit: number) {
    //? Check if the length of the value is greater than the limit
    if (value.length > 10) {
      //? If it is, truncate the value and add ellipsis
      return value.substr(0, limit) + '...';
    }
    //? If the length is within the limit, return the original value
    return value;
  }
}
