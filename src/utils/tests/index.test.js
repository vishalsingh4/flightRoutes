// logo imports
import emiratesTail from 'assets/emirates-tail.png';
import airAsiaTail from 'assets/airasia-tail.png';
import indigoTail from 'assets/indigo-tail.png';
import vistaraTail from 'assets/vistara-tail.png';
import airIndiaTail from 'assets/airindia-tail.jpeg';
import goFirstTail from 'assets/go-first-tail.png';

import {
    getFlightLogo,
    getDateFormat,
    getDifferenceInMinutes
} from '..';

describe("Utils function", () => {
    const timeFormat = 'HH:mm';
    const dateFormat = 'EEE, dd LLL';

    it('should getFlightLogo correctly', () => {
        expect(getFlightLogo('EMIRATES')).toEqual(emiratesTail);
        expect(getFlightLogo('AIR_ASIA')).toEqual(airAsiaTail);
        expect(getFlightLogo('INDIGO')).toEqual(indigoTail);
        expect(getFlightLogo('VISTARA')).toEqual(vistaraTail);
        expect(getFlightLogo('AIR_INDIA')).toEqual(airIndiaTail);
        expect(getFlightLogo('GO_FIRST')).toEqual(goFirstTail);
        expect(getFlightLogo('')).toEqual(emiratesTail);
    });

    it('should getDateFormat correctly', () => {
        expect(getDateFormat('30/09/2021 08:10:02', timeFormat)).toEqual('08:10');
        expect(getDateFormat('30/09/2021 08:10:02', dateFormat)).toEqual('Thu, 30 Sep');
    });

    it('should getDifferenceInMinutes correctly', () => {
        expect(getDifferenceInMinutes('30/09/2021 08:10:02', '30/09/2021 14:10:02')).toEqual('6hr 0mins');
        expect(getDifferenceInMinutes('30/09/2021 08:10:00', '30/09/2021 08:30:00')).toEqual('20mins');
    });
})