/////////////////////объекты

console.log(console);
console.log(window);
console.log(document);
console.log(JSON);
console.log(Math);

console.dir(Number);
console.dir(String);
console.dir(Boolean);
console.dir(Object);
console.dir(Array);
console.dir(RegExp);
console.dir(Date);

////////////////////контекст

function sayName() {
    console.log(this.name);
}

function sayNameWithParam(text) {
    console.log(text + this.name);
}

var user1 = {
    name: 'Tom',
    sayName: sayName,
    sayNameWithParam: sayNameWithParam,
    family: {
        mom: {
            name: "Helen"
        },
        dad: {
            name: "David"
        }
    }
};

var user2 = {
    name: 'Hilfiger'
};

var user3 = {
    name: "Anna"
};


//call, apply - вызыет функцию с переданным объектом и параметрами
user1.sayName.call(user2);
user1.sayName.call(user1.family.mom);
user1.sayNameWithParam.apply(user1.family.dad, ["I'm "]);

//bind - привязывает объект к функции
sayName = sayName.bind(user3);

sayName();

//запись в переменную происходит по ссылке (память выделена только под одну переменную с двумя именами)
var user4 = user3;
user4.name = "New name";
console.log(user3.name);
console.log(user4.name);

function userFactory() {
    return {
        name: "Name"
    }
}

//создается новый экземпляр объекта
var user5 = userFactory();
var user6 = userFactory();

var nums = [1,2,5];
nums.splice(2, 0, 3, 4);
console.log(nums);