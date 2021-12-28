var friend1 = {firstName: 'Dragon',lastName:'Dolphin'};
var friend2 = {firstName: 'Tom',lastName:'Jerry'};

function invite(greeting1,greeting2){
    console.log(greeting1 + ' ' + this.firstName + ',' + this.lastName+ ',' + greeting2);
}
invite.call(friend1, 'Hey','How are you?');
invite.call(friend2, 'Hey', 'How are you?');



var friend1 = {firstName: 'Dragon',lastName:'Dolphin'};
var friend2 = {firstName: 'Tom',lastName:'Jerry'};

function invite(greeting1,greeting2){
    console.log(greeting1+ ' ' + this.firstName + ',' + this.lastName+ ' ,' + greeting2);
}
invite.apply(friend1, 'Hey','How are you?');
invite.apply(friend2, 'Hey', 'How are you?');





var friend1 = {firstName: 'Dragon',lastName:'Dolphin'};
var friend2 = {firstName: 'Tom',lastName:'Jerry'};

function invite(greeting1,greeting2){
    console.log(greeting1 + ' ' + this.firstName + ',' + this.lastName+ ' ,' + greeting2);
}
inviteFriend1('Hey','How are you?');
inviteFriend2('Hey', 'How are you?');







var Animal = function () {

    this.name = 'unknown';

    this.getName = function () {
        return this.name;
    }

    return this;
};

var Dog = function () {
      
    var private = 42;

    this.name = "Bello";

    this.bark = function () {
        return 'MEOW';
    }  
    return this;
};

Dog.prototype = new Animal();

var dog = new Dog();

console.log(
    "Is dog an instance of Dog? ", dog instanceof Dog, "\n",
    "Is dog an instance of Animal? ", dog instanceof Animal, "\n",
    dog.bark() +"\n", 
    dog.getName() +"\n", 
    dog.private +"\n" 
);

