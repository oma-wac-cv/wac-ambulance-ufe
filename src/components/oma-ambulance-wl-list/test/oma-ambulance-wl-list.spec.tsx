import { newSpecPage } from '@stencil/core/testing';
import { OmaAmbulanceWlList } from '../oma-ambulance-wl-list';

describe('oma-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OmaAmbulanceWlList],
      html: `<oma-ambulance-wl-list></oma-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <oma-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </oma-ambulance-wl-list>
    `);
  });
});
