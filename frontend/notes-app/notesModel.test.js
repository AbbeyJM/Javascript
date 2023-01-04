const NotesModel = require("./notesModel")

describe('Notes model', () => {
    it('is empty', () => {
        const model = new NotesModel();

        expect(model.getNotes()).toEqual([]);
    });

    it('adds a note', () => {
        const model = new NotesModel();

        model.addNote('buy milk');

        expect(model.getNotes()).toEqual(['buy milk']);
    });

    it('clears notes', () => {
        const model = new NotesModel();

        model.addNote('buy milk');
        model.addNote('make the bed');
        model.clear();

        expect(model.getNotes()).toEqual([]);
    });
});