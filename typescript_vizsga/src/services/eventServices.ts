import { Event } from "../entities/events";
import { Participant } from "../entities/participant";
import { EventManager } from "./eventManager";
import { Theme } from "../entities/theme";

export class EventOrganizer {
    private events: Map<number, Event> = new Map();
    private participants: Map<number, Participant> = new Map();
    private EventManage: EventManager<Event> = new EventManager<Event>();
    private themes: Map<string, Theme> = new Map();

    addEvent(event: Event, themeName: Theme): void {
        const theme = this.themes.get(themeName);
        if(theme){
            event.theme = themeName;
            this.events.set(event.id, event)
        } else {
            console.log((`Hiba: A ${themeName} témájú csoport nem található.`));
            
        }
        
    }

    addParticipant(participant: Participant): void {
        this.participants.set(participant.id, participant)
    }

    addTheme(theme: Theme): void {
        if(!this.themes.has(theme)){
            this.themes.set(theme, theme);
            console.log(`Új tematikus csoport hozzáadva ${theme}`);            
        } else {
            console.log(`Hiba: A ${theme} tematikus csoport már létezik.`);
            
        }
    }

    removeEvent(eventId: number): void {
        this.events.delete(eventId);
        this.EventManage.removeItem(eventId);
    }

    removeParticipant(participantId: number): void {
        this.participants.delete(participantId);
    }

    removeTheme(theme: Theme){
        if(this.themes.has(theme)) {
            this.themes.delete(theme);
            console.log(`A ${theme} tematikus csoport eltávolítva.`);
        } else {
            console.log(`Hiba: Nincs ${theme} tematikus csoport.`);
            
        }
    }

    listEvents(): Event[]{
        return Array.from(this.events.values());
    }

    eventReservation(eventId: number, participantId: number): void {
        const event = this.events.get(eventId);
        const participant = this.participants.get(participantId);

        if (this.isEvent(event) && this.isParticipant(participant) && !this.EventManage.listItem().find(event => event.id === eventId)) {
            this.EventManage.addItem(event);
            console.log(`${participant.name} lefoglalta a ${event.time}-ra/re eső eseményt. Témája: ${event.name}`);            
        } else {
            console.log(`Ez az esemény nem foglalható le mert már foglalt.`);
            
        }
    }

    cancelReservation(eventId: number): void {
        if(this.EventManage.listItem().find(event => event.id === eventId)){
            this.EventManage.removeItem(eventId);
            console.log("Esemény törölve.");            
        } else {
            console.log("Az esemény nem létezik/nem lett lefoglalva.");
            
        }
    }

    listReservations(): Event[] {
        return this.EventManage.listItem();
    }

    listEventByTheme(filter: Theme | string): Event[]{
        if(typeof filter === 'string'){
            return Array.from(this.events.values()).filter(event => event.theme === filter);
        } else {
            return Array.from(this.events.values()).filter(event => event.theme === Theme[filter]);
        }
    }




    private isEvent(obj: any): obj is Event {
        return obj && typeof obj.id === 'number' && typeof obj.name === 'string' && typeof obj.location === 'string' && obj.time instanceof Date;        
    }

    private isParticipant(obj: any): obj is Participant {
        return obj && typeof obj.id === 'number' && typeof obj.name === 'string';
    }
}