import { Events } from './events';

export const EVENTS: Events[] = [ // stworzony array z informacją niezbędną dla korzystania z danej strony, zawiera informacje o turniejach
// tslint:disable-next-line: max-line-length // (tu i dalej) specjalna komenda pozwaliająca na przekroczenie długości linii kodu
    {name: 'ESL Pro League Season 9 Odense 2019', description: 'Jun 18th - Jun 22nd 2019', quantityOfTeams: 16, winner: 'Liquid', scPlace: 'G2', tdPlace: 'NRG', type: 'lan', prPool: 600000, pWinner: 250000, pSecond: 80000, pThird: 40000, photoOfEvent: 'assets/events/eventESL9.png'},
// tslint:disable-next-line: max-line-length
    {name: 'DreamHack Open Summer Rio 2019', description: 'Jun 15th - Jun 17th 2019', quantityOfTeams: 8, winner: 'OpTic', scPlace: 'Ancient', tdPlace: 'Tricker', type: 'lan',  prPool: 100000, pWinner: 50000, pSecond: 20000, pThird: 10000, photoOfEvent: 'assets/events/eventDH2019.png'},
// tslint:disable-next-line: max-line-length
    {name: 'BLAST Pro Series Madrid 2019', description: 'May 10th - May 11th 2019', quantityOfTeams: 6, winner: 'ENCE', scPlace: 'Astralis', tdPlace: 'NiP', type: 'lan',  prPool: 250000, pWinner: 125000, pSecond: 50000, pThird: 45000, photoOfEvent: 'assets/events/eventBLASTMadrid.png'},
// tslint:disable-next-line: max-line-length
    {name: 'Intel Extreme Masters Katowice 2019', description: 'Feb 20th - Mar 3rd 2019', quantityOfTeams: 16, winner: 'Astralis', scPlace: 'ENCE', tdPlace: 'Natus Vincere', type: 'lan', prPool: 1000000,  pWinner: 500000, pSecond: 150000, pThird: 70000, photoOfEvent: 'assets/events/eventIEM2019.png'},
// tslint:disable-next-line: max-line-length
    {name: 'BLAST Pro Series Lisbon 2018', description: 'Dec 14th - Dec 15th 2018', quantityOfTeams: 6, winner: 'Astralis', scPlace: 'Natus Vincere', tdPlace: 'Cloud9', type: 'online', prPool: 250000, pWinner: 125000, pSecond: 50000, pThird: 25000, photoOfEvent: 'assets/events/eventBLASTMadrid.png'},
// tslint:disable-next-line: max-line-length
    {name: 'Intel Extreme Masters Chicago 2018', description: 'Nov 6th - Nov 11th 2018', quantityOfTeams: 16, winner: 'Astralis', scPlace: 'Liquid', tdPlace: 'FaZe', type: 'lan', prPool: 250000, pWinner: 100000, pSecond: 42000, pThird: 20000, photoOfEvent: 'assets/events/eventIEM2019.png'},
// tslint:disable-next-line: max-line-length
    {name: 'ESL One New York 2018', description: 'Sep 26th - Sep 30th 2018', quantityOfTeams: 8, winner: 'mousesports', scPlace: 'Liquid', tdPlace: 'Gambit', type: 'international lan', prPool: 250000, pWinner: 125000, pSecond: 50000, pThird: 25000, photoOfEvent: 'assets/events/eventESLOne.png'},
// tslint:disable-next-line: max-line-length
    {name: 'FACEIT Major London 2018', description: 'Sep 12th - Sep 23rd 2018', quantityOfTeams: 16, winner: 'Astralis', scPlace: 'Natus Vincere', tdPlace: 'Liquid', type: 'international lan', prPool: 1000000, pWinner: 500000, pSecond: 150000, pThird: 70000, photoOfEvent: 'assets/events/eventMajorLondon2018.png'},
// tslint:disable-next-line: max-line-length
    {name: 'ELEAGUE CS:GO Premier Atlanta 2018', description: 'Jul 21st - Jul 29th 2018', quantityOfTeams: 8, winner: 'Astralis', scPlace: 'Liquid', tdPlace: 'mousesports', type: 'online', prPool: 1000000, pWinner: 500000, pSecond: 200000, pThird: 80000, photoOfEvent: 'assets/events/eventEleague2018.png'},
// tslint:disable-next-line: max-line-length
    {name: 'StarSeries i-League Season 5 Kyiv 2018', description: 'May 28th - Jun 3rd 2018', quantityOfTeams: 16, winner: 'Natus Vincere', scPlace: 'NRG', tdPlace: 'mousesports', type: 'online', prPool: 300000, pWinner: 125000, pSecond: 50000, pThird: 25000, photoOfEvent: 'assets/events/eventSS52018.png'},
// tslint:disable-next-line: max-line-length
    {name: 'ECS Season 5 Finals London 2018', description: 'Mar 15th - Mar 18th 2018', quantityOfTeams: 8, winner: 'Astralis', scPlace: 'Liquid', tdPlace: 'FaZe', type: 'international lan', prPool: 660000, pWinner: 250000, pSecond: 120000, pThird: 65000, photoOfEvent: 'assets/events/eventsECS52018.png'},
// tslint:disable-next-line: max-line-length
    {name: 'ESL Pro League Season 8 Odense 2017', description: 'Dec 5th - Dec 10th 2017', quantityOfTeams: 12, winner: 'SK', scPlace: 'FaZe', tdPlace: 'fnatic', type: 'lan', prPool: 750000, pWinner: 225000, pSecond: 100000, pThird: 60000, photoOfEvent: 'assets/events/eventESL9.png'},
// tslint:disable-next-line: max-line-length
    {name: 'BLAST Pro Series Copenhagen 2017', description: 'Nov 24th - Nov 25th 2017', quantityOfTeams: 6, winner: 'SK', scPlace: 'Astralis', tdPlace: 'Faze', type: 'international lan', prPool: 250000, pWinner: 125000, pSecond: 50000, pThird: 25000, photoOfEvent: 'assets/events/eventBLASTMadrid.png'},
// tslint:disable-next-line: max-line-length
    {name: 'Intel Extreme Masters Oakland 2017', description: 'Nov 14th - Nov 19th 2017', quantityOfTeams: 12, winner: 'Nip', scPlace: 'FaZe', tdPlace: 'Cloud9', type: 'international lan', prPool: 300000, pWinner: 125000, pSecond: 50000, pThird: 25000, photoOfEvent: 'assets/events/eventIEM2019.png'},
// tslint:disable-next-line: max-line-length
    {name: 'EPICENTER Saint Petersburg 2017', description: 'Oct 24th - Oct 29th 2017', quantityOfTeams: 8, winner: 'SK', scPlace: 'Virtus.pro', tdPlace: 'G2', type: 'lan', prPool: 490000, pWinner: 250000, pSecond: 100000, pThird: 60000, photoOfEvent: 'assets/events/eventEpicenter2017.png'},
// tslint:disable-next-line: max-line-length
    {name: 'ESG Tour Mykonos 2017', description: 'Sep 7th - Sep 10th 2017', quantityOfTeams: 8, winner: 'mousesports', scPlace: 'Liquid', tdPlace: 'SK', type: 'international lan', prPool: 235000, pWinner: 117500, pSecond: 47000, pThird: 23500, photoOfEvent: 'assets/events/eventESG2017.png'},
// tslint:disable-next-line: max-line-length
    {name: 'PGL Major Krakow 2017', description: 'Jul 16th - Jul 23rd 2017', quantityOfTeams: 16, winner: 'Gambit', scPlace: 'Immortals', tdPlace: 'Virtus.pro', type: 'lan', prPool: 1000000, pWinner: 500000, pSecond: 150000, pThird: 70000, photoOfEvent: 'assets/events/eventPGL2017.png'},
// tslint:disable-next-line: max-line-length
    {name: 'Intel Extreme Masters Sydney 2017', description: 'May 3rd - May 7th 2017', quantityOfTeams: 8, winner: 'SK', scPlace: 'FaZe', tdPlace: 'OpTic', type: 'online', prPool: 200000, pWinner: 100000, pSecond: 40000, pThird: 20000, photoOfEvent: 'assets/events/eventIEM2019.png'},
// tslint:disable-next-line: max-line-length
    {name: 'SL i-League StarSeries Season 3 Kyiv 2017', description: 'Apr 4th - Apr 9th 2017', quantityOfTeams: 16, winner: 'FaZe', scPlace: 'Astralis', tdPlace: 'Natus Vincere', type: 'online', prPool: 300000, pWinner: 125000, pSecond: 50000, pThird: 25, photoOfEvent: 'assets/events/eventSS32017.png'},
// tslint:disable-next-line: max-line-length
    {name: 'MLG Columbus 2016', description: 'Mar 29th - Apr 3rd 2016', quantityOfTeams: 16, winner: 'Luminocity', scPlace: 'Natus Vincere', tdPlace: 'Liquid', type: 'international lan', prPool: 1000000, pWinner: 500000, pSecond: 125000, pThird: 70000, photoOfEvent: 'assets/events/eventMLG2016.png'}
];
