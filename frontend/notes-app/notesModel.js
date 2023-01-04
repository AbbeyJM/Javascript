// const model = new NotesModel();
class NotesModel {
    constructor() {
        this.note = [];
    }

    getNotes() {
        return this.note;
    } // should return []

    //model.addNote('Buy milk');
    addNote(title) {
        this.note.push(title);
    }

    clear() {
        this.note = [];
    }
}

module.exports = NotesModel;
// model.addNote('Go to the gym');

// model.getNotes(); // should now return ['Buy milk', 'Go to the gym']

// model.reset();

// model.getNotes(); // should now return []