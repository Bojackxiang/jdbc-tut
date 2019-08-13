import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalControllerService {

  constructor() { }

  //
  private isShowingModal: boolean = false;
  private newSubject = new Subject<any>();

  toggleModal(): Observable<any> {
    return of(!this.isShowingModal)
  }


}
