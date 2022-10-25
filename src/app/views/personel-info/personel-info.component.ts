import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-personel-info',
  templateUrl: './personel-info.component.html',
  styleUrls: ['./personel-info.component.css']
})
export class PersonelInfoComponent implements OnInit {
  personalDetails: FormGroup;
  @Output() newClickEvent = new EventEmitter;

  constructor(private fb: FormBuilder,
              private dataService: DataService) { }

  ngOnInit() {
    this.createPersoneDetailsForm();
  }
  createPersoneDetailsForm(): void {
    this.personalDetails = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required],
      status: ['', Validators.required]
    });
  }
  get personal() { return this.personalDetails.controls; }

  next(): void {
    if (this.personalDetails.invalid) { return };
    this.newClickEvent.emit({value: 'policy'});
    let data = this.formDetails();
    this.sendNewData(data);
  }

  formDetails(): any {
    console.log( this.personalDetails.controls)
    const NAME = this.personalDetails.controls.name.value;
    const EMAIL = this.personalDetails.controls.email.value;
    const BIRTHDAY = this.personalDetails.controls.birthday.value;
    const GENDER = this.personalDetails.controls.gender.value;
    const STATUS = this.personalDetails.controls.status.value;
    let datas = [];
    datas.push({name: NAME, email: EMAIL, birthday: BIRTHDAY, gender: GENDER, status: STATUS});
    return datas;
  }
  sendNewData(data: string) {
    this.dataService.sendData(data);
  }

}
