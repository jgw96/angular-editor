export class AngularIdePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-ide-app h1')).getText();
  }
}
