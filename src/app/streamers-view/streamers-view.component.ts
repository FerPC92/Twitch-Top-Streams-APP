import { Component, OnInit } from '@angular/core';
import {MainService} from '../services/main.service'
import {Chart} from 'chart.js';

@Component({
  selector: 'app-streamers-view',
  templateUrl: './streamers-view.component.html',
  styleUrls: ['./streamers-view.component.css']
})
export class StreamersViewComponent implements OnInit {

  

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = this._mainService.chartNames;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: this._mainService.chartViews, label: 'Current Viewers Of Live Stream by Streamer'},
  ];

  constructor(public _mainService : MainService) { 

    
  }

  ngOnInit() {
  }

}
