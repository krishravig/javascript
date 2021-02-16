/* prototype inheritance */

function User(name, email) {
    this.name = name;
    this.email = email;
}
User.prototype.login = function() {
    console.log(`logged in user: ${this.name}`);
}

User.prototype.logout = function() {
    console.log(`logged out user email: ${this.email}`);
}



const user1 = new User('ram', 'ram@gmail.com');
user1.login();
user1.logout();
user1.displayUser();


const user2 = new User('ganesh', 'ganesh@gmail.com');

console.log(user1);
console.log(user2);
let users = [user1, user2];

function Admin(...args) {
    this.role = args.pop();
    User.apply(this, [...args]);
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function(user) {
    users = users.filter( userObj => userObj.email !== user.email)

};

const admin = new Admin('vinoth', 'vk@gmail.com', 'admin');
users.push(admin);
admin.deleteUser(user1);
console.log(`Admin Role: ${admin.role}`);
console.log(users);