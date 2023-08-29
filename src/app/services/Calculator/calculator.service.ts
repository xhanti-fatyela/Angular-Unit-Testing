import { Injectable } from '@angular/core';
import { LoggerService } from '../Logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private LoggerService: LoggerService){}

  add(n1: number, n2: number) {
     
    let result = n1 + n2;
    this.LoggerService.log('Add Operation is called')

    return result;
  }

  subtract(n1: number, n2: number) {
     
    let result = n1 - n2;
    this.LoggerService.log('Subtract Operation is called')

    return result;
  }
}

