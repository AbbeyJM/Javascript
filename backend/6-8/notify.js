const notifyByEmail = (email) => {
    return ('Email sent to: ${email}');
}

const notifyByText = (text) => {
    return ('Text sent to: ${text}');
}

const notify = (emailOrPhone, notifyFunction) => {
    return notifyFunction(emailOrPhone);
} 

console.log(notify("hello@makers.gmail.com", notifyByEmail));
console.log(notify(+07784992356, notifyByText));