import { newE2EPage } from '@stencil/core/testing';

describe('oma-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<oma-ambulance-wl-list></oma-ambulance-wl-list>');

    const element = await page.find('oma-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
