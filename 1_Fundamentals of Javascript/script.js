// Fundamentals of Javascript
// Arrays and Objects
// Functions Return
// Async Js Coding

// Arrays
var arr = [1, 2, 3, 4];

// for each
arr.forEach(function (val) {
    console.log(val + " Hello");
})

// map
var ans = arr.map(function (val) {
    return val + 12;
})

console.log(ans);

// filter
var newarr = arr.filter(function (val) {
    if (val > 3) {
        return true;
    } else {
        return false;
    }
})

console.log(newarr);

//find
var answer = arr.find(function (val) {
    if (val == 2) {
        return val;
    }
})

console.log(answer);

//indexOf
console.log(arr.indexOf(2));


/**************************************/

// Objects - Key Value pairs
var obj = {
    name: "Harsh",
    age: 12
}

Object.freeze(obj); // Freezes the object values to avoid changes

console.log(obj.name);
console.log(obj['name']);


// Functions and return

// Length of functions = No. of Parameters
function abcd(a, b, c) {

}

function abcd() {
    return 12;
}

abcd();

// Asynchronous JS Coding

// line by line code chale ise kehte hai synchronous
// Jo bhi code async nature ka ho use side stack mein bhej do aur agle code ko chalao jo sync nature ka ho, jab saara sync code chal jaaye (main stack khali ho jaaye) tab check karo aysnc code complete hua ho ya nai, agar complete hua ho to use main stack mein laake mei chala sake

// var blob = await fetch('https://randomuser.me/api/')
// var res = await blob.json();

// console.log(res);

async function abcd() {
    var blob = await fetch('https://randomuser.me/api/')
    var ans = await blob.json();

    console.log(ans);
}

