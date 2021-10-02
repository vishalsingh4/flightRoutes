import { parse, format, differenceInMinutes } from 'date-fns';

// logo imports
import emiratesTail from 'assets/emirates-tail.png';
import airAsiaTail from 'assets/airasia-tail.png';
import indigoTail from 'assets/indigo-tail.png';
import vistaraTail from 'assets/vistara-tail.png';
import airIndiaTail from 'assets/airindia-tail.jpeg';
import goFirstTail from 'assets/go-first-tail.png';

// constants
const standardFormat = 'dd/MM/yyyy HH:mm:ss';

const getFlightLogo = flightName => {
    switch (flightName) {
        case 'EMIRATES': {
            return emiratesTail;
        }
        case 'AIR_ASIA': {
            return airAsiaTail;
        }
        case 'INDIGO': {
            return indigoTail;
        }
        case 'VISTARA': {
            return vistaraTail;
        }
        case 'AIR_INDIA': {
            return airIndiaTail;
        }
        case 'GO_FIRST': {
            return goFirstTail;
        }
        default: {
            return emiratesTail;
        }
    }
};

const getDateFormat = (date, dateFormat) => {
    const parsedDate = parse(date, standardFormat, new Date());
    const formattedDate = format(parsedDate, dateFormat);

    return formattedDate;
};

const getDifferenceInMinutes = (startDateTime, endDateTime) => {
    let flightDuration = '';
    const parsedStartDate = parse(startDateTime, standardFormat, new Date());
    const parsedEndDate = parse(endDateTime, standardFormat, new Date());
    const timeDiffInMins = differenceInMinutes(parsedEndDate, parsedStartDate);
    if (timeDiffInMins > 60) {
        const hours = Math.floor(timeDiffInMins / 60);
        const mins = timeDiffInMins % 60;
        flightDuration = `${hours}hr ${mins}mins`
    } else {
        flightDuration = `${timeDiffInMins}mins`
    }

    return flightDuration;
};

export {
    getFlightLogo,
    getDateFormat,
    getDifferenceInMinutes
}