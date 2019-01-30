import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-manage-compensate',
  templateUrl: './compensate.component.html',
  styleUrls: ['./compensate.component.less'],
})
export class ManageCompensateComponent implements OnInit {

  constructor(private http: _HttpClient) { }

  ngOnInit() { }

}
