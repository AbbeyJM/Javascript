const lowercaseMessage = (message) => {
    return message.toLowerCase();
}

const transform = (message, transformfunc) => {
    return transformfunc(message);
}

transform("WHY ARE YOU SHOUTING?", lowercaseMessage);

module.exports = lowercasefunc