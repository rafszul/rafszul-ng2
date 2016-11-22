import { RafszulPage } from './app.po';

describe('rafszul App', function() {
  let page: RafszulPage;

  beforeEach(() => {
    page = new RafszulPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
