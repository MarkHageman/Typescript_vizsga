import { EventOrganizer } from "./services/eventServices";
import { Event } from "./entities/events";
import { Participant } from "./entities/participant";
import { Theme } from "./entities/theme";

const eventOrganizer = new EventOrganizer();

//Események
const event1: Event = {
    id: 1,
    name: 'Születésnapi buli',
    location: 'Budapest',
    time: new Date('2024.04.30'),
    theme: Theme.Birthday
}

const event2: Event = {
    id: 2,
    name: 'Esküvői ceremónia',
    location: 'Tatabánya',
    time: new Date('2024.06.22'),
    theme: Theme.Marriage
}

const event3: Event = {
    id: 3,
    name: 'Születésnapi buli',
    location: 'Budaörs',
    time: new Date('2024.05.10'),
    theme: Theme.Birthday
}

//Résztvevők
const participant1: Participant = {
    id: 1,
    name: 'John Doe'
}

const participant2: Participant = {
    id: 2,
    name: 'Jane Doe'
}

//Csoportok hozzáadása
eventOrganizer.addTheme(Theme.Birthday);
eventOrganizer.addTheme(Theme.Marriage);

//Események hozzáadása
eventOrganizer.addEvent(event1, Theme.Birthday);
eventOrganizer.addEvent(event2, Theme.Marriage);
eventOrganizer.addEvent(event3, Theme.Birthday);

//résztvevők hozzáadása
eventOrganizer.addParticipant(participant1)
eventOrganizer.addParticipant(participant2)

//Összes esemény
console.log("Összes esemény:");
console.log(eventOrganizer.listEvents());

//Születésnapi esemény
console.log("Születésnapi események");
console.log(eventOrganizer.listEventByTheme(Theme.Birthday));

//Esküvői
console.log("Esküvői események");
console.log(eventOrganizer.listEventByTheme(Theme.Marriage));

//Esemény törlés
eventOrganizer.removeEvent(3);
console.log(eventOrganizer.listEvents());

//esemény foglalása
eventOrganizer.eventReservation(1, 1)
console.log(eventOrganizer.listReservations());
eventOrganizer.cancelReservation(1)
console.log(eventOrganizer.listReservations());


console.log(eventOrganizer.listParticipant());

eventOrganizer.removeParticipant(2)

console.log(eventOrganizer.listParticipant());
