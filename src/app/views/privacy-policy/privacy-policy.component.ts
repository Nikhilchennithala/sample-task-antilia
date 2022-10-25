import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {
  checked = false;
  @Output() newClickEvent = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  submit(): void {
    console.log(this.checked)
    if(!this.checked) {
      return;
    }
    this.newClickEvent.emit({value: 'table'});
  }

}
