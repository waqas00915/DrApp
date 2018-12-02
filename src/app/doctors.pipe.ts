import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doctors'
})
export class DoctorsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
