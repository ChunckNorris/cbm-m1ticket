import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTicketsPage } from './my-tickets-page.component';

describe('MyTicketsPageComponent', () => {
  let component: MyTicketsPage;
  let fixture: ComponentFixture<MyTicketsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTicketsPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTicketsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
