import { Theme } from "./theme";

export interface Event {
    id: number;
    name: string;
    location: string;
    time: Date;
    theme: Theme;
}