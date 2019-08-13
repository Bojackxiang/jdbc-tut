import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../services/mock-data.service';
import { RdsInterface } from 'src/app/models/RDSInterface';
import { DOMInterface } from 'src/app/models/DOMInterface';
import { ModalControllerService } from 'src/app/services/modal-controller.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: []
})
export class DashboardComponent implements OnInit {
  dataHeader: string[] = ['Date', 'Property ID', 'Property Description', 'Ads Types', 'Ads ID', 'Transcation', 'Status']

  rdsData: RdsInterface[] = [];
  domData: DOMInterface[] = [];
  isModalDisplay = false;
  searchFrom: FormGroup;

  constructor(private mockData: MockDataService, private modalController: ModalControllerService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.mockData.createRDS().subscribe(data => {
      this.rdsData = data.slice(1, 10);
    });
    this.searchFrom = this.formBuilder.group({
      searchContent: '',
    })
  }

  showingModal() {
    this.isModalDisplay = true;
  }

  onModalCloseClicked(bindEvent) {
    console.log('binding successfully');
    console.log(bindEvent);
    this.isModalDisplay = !this.isModalDisplay;
  }

  modeChange(mode) {
    console.log(mode);

  }

  searchingClicked() {
    console.log('te');
    console.log(this.searchFrom.value);
  }
}
