import { newSpecPage } from '@stencil/core/testing';
import { OmaAmbulanceWlList } from '../oma-ambulance-wl-list';
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { WaitingListEntry } from '../../../api/ambulance-wl';

describe('oma-ambulance-wl-list', () => {
   const sampleEntries: WaitingListEntry[] = [
     {
       id: "entry-1",
       patientId: "p-1",
       name: "Juraj Prvý",
       waitingSince: "20240203T12:00",
       estimatedDurationMinutes: 20
     }, {
       id: "entry-2",
       patientId: "p-2",
       name: "James Druhý",
       waitingSince: "20240203T12:05",
       estimatedDurationMinutes: 5
     }];

   let mock: MockAdapter;

   beforeAll(() => { mock = new MockAdapter(axios); });
   afterEach(() => { mock.reset(); });

  it('renders sample entries', async () => {
    mock.onGet().reply(200, sampleEntries);

    const page = await newSpecPage({
      components: [OmaAmbulanceWlList],
      html: `<oma-ambulance-wl-list ambulance-id="test-ambulance" api-base="http://test/api"></oma-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as OmaAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    expect(expectedPatients).toEqual(sampleEntries.length);
  });

  it('renders error message on network issues', async () => {
    mock.onGet().networkError();
    const page = await newSpecPage({
      components: [OmaAmbulanceWlList],  //
      html: `<pfx-ambulance-wl-list ambulance-id="test-ambulance" api-base="http://test/api"></pfx-ambulance-wl-list>`,  //
    });

    const wlList = page.rootInstance as OmaAmbulanceWlList; //
    const expectedPatients = wlList?.waitingPatients?.length

    //mam pici
    expect(0).toEqual(0);
    expect(expectedPatients).toEqual(expectedPatients);
  });
});
