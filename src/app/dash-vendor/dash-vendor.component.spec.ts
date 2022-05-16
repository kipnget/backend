import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashVendorComponent } from './dash-vendor.component';

describe('DashVendorComponent', () => {
  let component: DashVendorComponent;
  let fixture: ComponentFixture<DashVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashVendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
