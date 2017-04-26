import { AngularComponentsCoursePage } from './app.po';

describe('angular-components-course App', () => {
  let page: AngularComponentsCoursePage;

  beforeEach(() => {
    page = new AngularComponentsCoursePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
