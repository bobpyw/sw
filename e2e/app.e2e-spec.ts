import { SwPage } from './app.po';

describe('sw App', () => {
  let page: SwPage;

  beforeEach(() => {
    page = new SwPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
