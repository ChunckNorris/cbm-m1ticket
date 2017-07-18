import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTicketPage } from './new-ticket-page.component';

describe('NewTicketPage', () => {
  let component: NewTicketPage;
  let fixture: ComponentFixture<NewTicketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTicketPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTicketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
