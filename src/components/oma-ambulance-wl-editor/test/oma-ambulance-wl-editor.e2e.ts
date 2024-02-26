import { newE2EPage } from '@stencil/core/testing';

describe('oma-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<oma-ambulance-wl-editor></oma-ambulance-wl-editor>');

    const element = await page.find('oma-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
