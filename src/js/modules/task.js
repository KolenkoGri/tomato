export class Task {
    constructor(id, text, count) {
        this.id = id;
        this.text = text;
        this.count = count;
    }
}

export class Task extends Important {
    importance = important;
    super(id, text, count)
}

export class Task extends Standart {
    importance = standart;
    super(id, text, count)
}

export class Task extends NoImportant {
    importance = noImportant;
    super(id, text, count)
}