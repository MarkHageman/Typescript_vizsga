"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventManager = void 0;
class EventManager {
    constructor() {
        this.items = new Map();
    }
    addItem(item) {
        this.items.set(item.id, item);
        console.log(`Item hozzáadva ${item.id}`);
    }
    removeItem(itemId) {
        this.items.delete(itemId);
        console.log(`Item törölve: ${itemId}`);
    }
    listItem() {
        return Array.from(this.items.values());
    }
}
exports.EventManager = EventManager;
