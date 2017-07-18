import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsPage } from './reports-page.component';

describe('ReportsPage', () => {
  let component: ReportsPage;
  let fixture: ComponentFixture<ReportsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
