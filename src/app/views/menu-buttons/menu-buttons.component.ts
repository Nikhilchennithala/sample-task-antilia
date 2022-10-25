import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-buttons',
  templateUrl: './menu-buttons.component.html',
  styleUrls: ['./menu-buttons.component.css']
})
export class MenuButtonsComponent implements OnInit {
  isPersonInfo = false;
  isLocation = false;
  isSocial = false;
  isContact = false;
  isSkill = false;
  isAddition = false;
  isPolicy = false;

  @Output() newClickEvent = new EventEmitter;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  person(): void {
    this.isPersonInfo = true;
    this.isLocation = false;
    this.isSocial = false;
    this.isContact = false;
    this.isSkill = false;
    this.isAddition = false;
    this.isPolicy = false;
    this.newClickEvent.emit({value: 'person'});
  }

  location(): void {
    this.isPersonInfo = false;
    this.isLocation = true;
    this.isSocial = false;
    this.isContact = false;
    this.isSkill = false;
    this.isAddition = false;
    this.isPolicy = false;
    this.newClickEvent.emit({value: 'location'});
  }

  social(): void {
    this.isPersonInfo = false;
    this.isLocation = false;
    this.isSocial = true;
    this.isContact = false;
    this.isSkill = false;
    this.isAddition = false;
    this.isPolicy = false;
    this.newClickEvent.emit({value: 'social'});
  }

  contact(): void {
    this.isPersonInfo = false;
    this.isLocation = false;
    this.isSocial = false;
    this.isContact = true;
    this.isSkill = false;
    this.isAddition = false;
    this.isPolicy = false;
    this.newClickEvent.emit({value: 'contact'});
  }

  skill(): void {
    this.isPersonInfo = false;
    this.isLocation = false;
    this.isSocial = false;
    this.isContact = false;
    this.isSkill = true;
    this.isAddition = false;
    this.isPolicy = false;
    this.newClickEvent.emit({value: 'skill'});
  }

  additional(): void {
    this.isPersonInfo = false;
    this.isLocation = false;
    this.isSocial = false;
    this.isContact = false;
    this.isSkill = false;
    this.isAddition = true;
    this.isPolicy = false;
    this.newClickEvent.emit({value: 'additional'});
  }

  policy(): void {
    this.isPersonInfo = false;
    this.isLocation = false;
    this.isSocial = false;
    this.isContact = false;
    this.isSkill = false;
    this.isAddition = false;
    this.isPolicy = true;
    this.newClickEvent.emit({value: 'policy'});
  }
  
}
