import { Ngform4cmsPage } from './app.po';

describe('ngform4cms App', () => {
  let page: Ngform4cmsPage;

  beforeEach(() => {
    page = new Ngform4cmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
