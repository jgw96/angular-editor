import { AngularIdePage } from './app.po';

describe('angular-ide App', function() {
  let page: AngularIdePage;

  beforeEach(() => {
    page = new AngularIdePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular-ide works!');
  });
});
