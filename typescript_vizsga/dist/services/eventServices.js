"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventOrganizer = void 0;
const eventManager_1 = require("./eventManager");
const theme_1 = require("../entities/theme");
class EventOrganizer {
    constructor() {
        this.events = new Map();
        this.participants = new Map();
        this.EventManage = new eventManager_1.EventManager();
        this.themes = new Map();
    }
    addEvent(event, themeName) {
        const theme = this.themes.get(themeName);
        if (theme) {
            event.theme = themeName;
            this.events.set(event.id, event);
        }
        else {
            console.log((`Hiba: A ${themeName} témájú csoport nem található.`));
        }
    }
    addParticipant(participant) {
        this.participants.set(participant.id, participant);
    }
    addTheme(theme) {
        if (!this.themes.has(theme)) {
            this.themes.set(theme, theme);
            console.log(`Új tematikus csoport hozzáadva ${theme}`);
        }
        else {
            console.log(`Hiba: A ${theme} tematikus csoport már létezik.`);
        }
    }
    removeEvent(eventId) {
        this.events.delete(eventId);
        this.EventManage.removeItem(eventId);
    }
    removeParticipant(participantId) {
        this.participants.delete(participantId);
    }
    removeTheme(theme) {
        if (this.themes.has(theme)) {
            this.themes.delete(theme);
            console.log(`A ${theme} tematikus csoport eltávolítva.`);
        }
        else {
            console.log(`Hiba: Nincs ${theme} tematikus csoport.`);
        }
    }
    listEvents() {
        return Array.from(this.events.values());
    }
    listParticipant() {
        return Array.from(this.participants.values());
    }
    eventReservation(eventId, participantId) {
        const event = this.events.get(eventId);
        const participant = this.participants.get(participantId);
        if (this.isEvent(event) && this.isParticipant(participant) && !this.EventManage.listItem().find(event => event.id === eventId)) {
            this.EventManage.addItem(event);
            console.log(`${participant.name} lefoglalta a ${event.time}-ra/re eső eseményt. Témája: ${event.name}`);
        }
        else {
            console.log(`Ez az esemény nem foglalható le mert már foglalt.`);
        }
    }
    cancelReservation(eventId) {
        if (this.EventManage.listItem().find(event => event.id === eventId)) {
            this.EventManage.removeItem(eventId);
            console.log("Esemény törölve.");
        }
        else {
            console.log("Az esemény nem létezik/nem lett lefoglalva.");
        }
    }
    listReservations() {
        return this.EventManage.listItem();
    }
    listEventByTheme(filter) {
        if (typeof filter === 'string') {
            return Array.from(this.events.values()).filter(event => event.theme === filter);
        }
        else {
            return Array.from(this.events.values()).filter(event => event.theme === theme_1.Theme[filter]);
        }
    }
    isEvent(obj) {
        return obj && typeof obj.id === 'number' && typeof obj.name === 'string' && typeof obj.location === 'string' && obj.time instanceof Date;
    }
    isParticipant(obj) {
        return obj && typeof obj.id === 'number' && typeof obj.name === 'string';
    }
}
exports.EventOrganizer = EventOrganizer;
