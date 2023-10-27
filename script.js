//Q1 How to compare two JSON have the same properties without order
// a.let Obj1 = {name:"person 1", age:5};
// b.let Obj2 = {age:5, name: "person 1"};

var Obj1 = {
    "name" : "person1",
    "age" : 5
}

var Obj2 = {
    "age" : 5,
    "name" : "person1"
}

var strObj1 = JSON.stringify(Obj1);
var strObj2 = JSON.stringify(Obj2);

var parsedObj1 = JSON.parse(strObj1);
var parsedObj2 = JSON.parse(strObj2);

if (JSON.stringify(parsedObj1) === JSON.stringify(parsedObj2))
 {
    console.log("equal");
} 
else
{
    console.log("not equal");
}

//Q2 Use the rest countries API URL => https://restcountries.eu/rest/v2/all and display
// all the country flags in the console

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function (){
    var value = request.response;
    var result = JSON.parse(value);
    console.log(result);
    for (var i =0;i<result.length;i++){
        console.log(result[i].flags.png);
    }
}

//Q3 Use the same rest countries and print all countries names,regions,sub regions and populations

var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload = function (){
    var data1 = request1.response;
    var result1 = JSON.parse(data1);
    console.log(result1);
    for (var i =0;i<result1.length;i++){
        console.log(result1[i].name.common);
    }
}

var request2 = new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v3.1/all",true)
request2.send();
request2.onload = function (){
    var data2 = request2.response;
    var result2 = JSON.parse(data2);
    console.log(result2);
    for (var i =0;i<result2.length;i++){
        console.log(result2[i].region);
    }
}

var request3 = new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v3.1/all",true)
request3.send();
request3.onload = function (){
    var data3 = request1.response;
    var result3 = JSON.parse(data3);
    console.log(result3);
    for (var i =0;i<result3.length;i++){
        console.log(result3[i].subregion);
    }
}

var request4 = new XMLHttpRequest();
request4.open("GET","https://restcountries.com/v3.1/all",true)
request4.send();
request4.onload = function (){
    var data4 = request1.response;
    var result4 = JSON.parse(data4);
    console.log(result4);
    for (var i =0;i<result4.length;i++){
        console.log(result4[i].population);
    }
}