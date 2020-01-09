// ES6 object spread opeator

const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 40
}

function objectSpread(p1, p2, p3){
    console.log(p1)
    console.log(p2)
    console.log(p3)

}

const { tiger, lion, ...rest} = animals;
// tiger lion rest で出てくる

objectSpread(tiger, lion, rest);


const array = [1, 2, 3, 4, 5]
function sum(a, b, c, d, e){
    return a + b + c + d + e;
}
sum(...array);
//15




