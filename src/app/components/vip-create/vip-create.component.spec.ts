import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipCreateComponent } from './vip-create.component';

describe('VipCreateComponent', () => {
  let component: VipCreateComponent;
  let fixture: ComponentFixture<VipCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
