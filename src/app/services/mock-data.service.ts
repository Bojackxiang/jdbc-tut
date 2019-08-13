import { Injectable } from '@angular/core';
import { RdsInterface } from '../models/RDSInterface';
import { DOMInterface } from '../models/DOMInterface';
import { Observable, of } from 'rxjs';
import * as uuid from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }

  private domGenerator() {
    const randomDOM: DOMInterface[] = [];
    for (let i = 0; i < 100; i++) {
      const sliceDOM: DOMInterface = {
        recordId: i,
        id: uuid.v4(),
        publishId: 'qqq',
        publishEventID: 'qaz',
        publishEventStatus: 'queued',
        createdAt: new Date('February 4, 2016 10:13:00')
      };
      randomDOM.push(sliceDOM);
    }
    return randomDOM;
  }

  private rdsGenertaor() {
    const rdsMockData: RdsInterface[] = [];

    for (let i = 0; i < 100; i++) {

      const rdsSlice: RdsInterface = {
        id: i,
        recordId: '12345',
        publishTransactionId: '2134',
        publishEventID: '123321',
        publishEventStatus: 'processed',
        createdAt: new Date('February 4, 2016 10:13:00'),
      };
      rdsMockData.push(rdsSlice);
    }

    return rdsMockData;

  }

  private createDOM(): Observable<DOMInterface[]> {
    return of(this.domGenerator());
  }

  createRDS() {
    return of(this.rdsGenertaor());
  }
}
