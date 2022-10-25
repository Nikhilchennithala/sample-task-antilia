import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelInfoComponent } from './personel-info.component';

describe('PersonelInfoComponent', () => {
  let component: PersonelInfoComponent;
  let fixture: ComponentFixture<PersonelInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonelInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonelInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
