class user {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const person = {
    name: 'Ravi',
    displayName() {
        console.log('person method is invoked');
    }
}
const getName = function (user) {
    console.log(user.name)
}
const getAge = function(user) {
    console.log(user.age);
}

module.exports = {
    user : user,
    personObject: person,
    getName : getName,
    getAge : getAge
};


