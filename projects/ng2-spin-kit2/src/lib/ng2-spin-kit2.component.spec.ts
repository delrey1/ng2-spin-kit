import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2SpinKit2Component } from './ng2-spin-kit2.component';

describe('Ng2SpinKit2Component', () => {
  let component: Ng2SpinKit2Component;
  let fixture: ComponentFixture<Ng2SpinKit2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng2SpinKit2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ng2SpinKit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
