import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { AppStore } from '../../store/state';
import * as ReducerActions from '../../store/actions/testing';
import { Store } from '@ngrx/store';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() modalClose = new EventEmitter<boolean>();
  content: string = "modeal component";
  element: any;
  switchState: any;
  modalDisplay: boolean = true;


  constructor(private el: ElementRef, private store: Store<AppStore>) {
    this.element = el.nativeElement;
    this.switchState = store.select('stateReducer')
  }

  ngOnInit() {
    this.element.addEventListener('click', (e: any) => {
      console.log(e.target.className);
      if (e.target.className == 'modal-wrapper animated') {
        this.closeModalClicked(true);
      }
      console.log('modal status')
      console.log(this.modalDisplay)
    });
    // for single value, use the subscribe to get the value
    this.switchState.subscribe(data => {
      this.switchState = data.currentState;
    });
  }

  closeModalClicked(closeClicked: boolean) {
    this.modalDisplay = false;
    this.modalClose.emit(closeClicked);
  }

  switchButton() {
    console.log('switch btn clicked')
    // please notice, you must call the class 
    this.store.dispatch(new ReducerActions.SwitchStatus(false));
  }

}
