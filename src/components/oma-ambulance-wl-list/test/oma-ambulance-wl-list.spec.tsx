import { newSpecPage } from '@stencil/core/testing';
import { OmaAmbulanceWlList } from '../oma-ambulance-wl-list';

describe('oma-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OmaAmbulanceWlList],
      html: `<oma-ambulance-wl-list></oma-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as OmaAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
