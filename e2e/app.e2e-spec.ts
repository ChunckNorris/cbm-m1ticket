import { CmbTicketmgrAppPage } from './app.po';

describe('cmb-ticketmgr-app App', () => {
  let page: CmbTicketmgrAppPage;

  beforeEach(() => {
    page = new CmbTicketmgrAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
