import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipEditComponent } from './vip-edit.component';

describe('VipEditComponent', () => {
  let component: VipEditComponent;
  let fixture: ComponentFixture<VipEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
