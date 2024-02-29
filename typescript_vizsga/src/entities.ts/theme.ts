export class Theme {
    constructor(name: string) {}
}

export class Birthday extends Theme {
    constructor(name: string, theme: string) {
        super(name)
    }
}

export class Marriage extends Theme {
    constructor(name: string, theme: string) {
        super(name)
    }
}