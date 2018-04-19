let arrayOne = [1,2,2,3,4,5,5,6,7,7,8,9,9];
let arrayThree = [10,11,12,13,14];
let arrayTwo = ['luis', 'carlos', 'david', 'papa', 'mama'];

function addArray(array){
    let result = 0;

    for(let i = 0;i < array.length;i++){
        result += array[i];
    }
    return result;
}

function deleteRepeat(array){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if( newArray.indexOf(array[i]) >= 0 ){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

function filterArray(array){
    return array.filter(function(element){
        return element % 2 === 0;
    })
}

var module = (function(){
    ss = 8989898989;
    name = 'john';
    age = 60;

    var firstMethod = function(name){
        console.log('Hi i am ' + name);
    }

    var whereMethod = function(where){
        console.log('I am at ' + where);
    }

    var secondMethod = function(){
        console.log('i am private');
    }

    return {
        theAge: age,
        publicMethod: firstMethod,
        otherMethod: whereMethod
    }
});

function getInputValues(){
    let obj = {};
    const first = document.getElementById('first').value;
    const second = document.getElementById('second').value;
    obj.first = first;
    obj.second = second;
    document.getElementById('first').value = '';
    document.getElementById('second').value = '';
    return obj;
}


