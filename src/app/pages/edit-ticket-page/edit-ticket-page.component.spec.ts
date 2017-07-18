import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTicketPage } from './edit-ticket-page.component';

describe('EditTicketPage', () => {
  let component: EditTicketPage;
  let fixture: ComponentFixture<EditTicketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTicketPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTicketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
