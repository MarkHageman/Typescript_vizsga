"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eventServices_1 = require("./services/eventServices");
const theme_1 = require("./entities/theme");
const eventOrganizer = new eventServices_1.EventOrganizer();
//Események
const event1 = {
    id: 1,
    name: 'Születésnapi buli',
    location: 'Budapest',
    time: new Date('2024.04.30'),
    theme: theme_1.Theme.Birthday
};
const event2 = {
    id: 2,
    name: 'Esküvői ceremónia',
    location: 'Tatabánya',
    time: new Date('2024.06.22'),
    theme: theme_1.Theme.Marriage
};
const event3 = {
    id: 3,
    name: 'Születésnapi buli',
    location: 'Budaörs',
    time: new Date('2024.05.10'),
    theme: theme_1.Theme.Birthday
};
//Résztvevők
const participant1 = {
    id: 1,
    name: 'John Doe'
};
const participant2 = {
    id: 2,
    name: 'Jane Doe'
};
//Csoportok hozzáadása
eventOrganizer.addTheme(theme_1.Theme.Birthday);
eventOrganizer.addTheme(theme_1.Theme.Marriage);
//Események hozzáadása
eventOrganizer.addEvent(event1, theme_1.Theme.Birthday);
eventOrganizer.addEvent(event2, theme_1.Theme.Marriage);
eventOrganizer.addEvent(event3, theme_1.Theme.Birthday);
//résztvevők hozzáadása
eventOrganizer.addParticipant(participant1);
eventOrganizer.addParticipant(participant2);
//Összes esemény
console.log("Összes esemény:");
console.log(eventOrganizer.listEvents());
//Születésnapi esemény
console.log("Születésnapi események");
console.log(eventOrganizer.listEventByTheme(theme_1.Theme.Birthday));
//Esküvői
console.log("Esküvői események");
console.log(eventOrganizer.listEventByTheme(theme_1.Theme.Marriage));
//Esemény törlés
eventOrganizer.removeEvent(3);
console.log(eventOrganizer.listEvents());
//esemény foglalása
eventOrganizer.eventReservation(1, 1);
console.log(eventOrganizer.listReservations());
eventOrganizer.cancelReservation(1);
console.log(eventOrganizer.listReservations());
console.log(eventOrganizer.listParticipant());
eventOrganizer.removeParticipant(2);
console.log(eventOrganizer.listParticipant());
