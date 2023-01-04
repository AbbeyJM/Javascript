require_relative = User
class UserBase {
    const names = [
        new User('Uma'),
        new User('Josh'),
        new User('Ollie')
    ];

    constructor(names) {
        these.names = names;
    }
    
    count() {
        return names.length
    }

    getNames() {
        return these.names
    }

    getIntroduction = (user) => {
        return "Hi, my name is${names}"
    }
}