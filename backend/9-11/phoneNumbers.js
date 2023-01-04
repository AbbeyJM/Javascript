const checkLength = (phoneNumbers) => {
    if (phoneNumbers.length <= 10) {
        return true;
    } else {
        return false;
    }
}

const filterLongNumbers = (phoneNumbers) => {
    return phoneNumbers.filter(checkLength);
}
