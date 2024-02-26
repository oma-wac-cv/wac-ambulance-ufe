import { newE2EPage } from '@stencil/core/testing';

describe('oma-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<oma-ambulance-wl-app></oma-ambulance-wl-app>');

    const element = await page.find('oma-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
