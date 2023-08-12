console.log("welcome to ajax class")


let fetchbtn= document.getElementById("fetchbtn");
fetchbtn.addEventListener("click", buttonclick);


// for getting data
function buttonclick(){
    debugger
console.log("button is clicked");

const xhr = new XMLHttpRequest();


xhr.open('GET','https://mocki.io/v1/6f125b12-a250-41d4-a1ce-88db06f2a2ad',true);

// it for onprogress
xhr.onprogress= function(){
    console.log("in progress");
}

//here we get data on load  
xhr.onload= function(){
    console.log("it is loaded");
    console.log(this.responseText);
    dat.innerHTML =this.responseText;

    obj=JSON.parse(this.responseText);
    console.log(obj);
    deep.innerHTML ="MY name is "+obj.name+". i leave in " +obj.city;
}

// we can request

xhr.send();

}


let backupbtn= document.getElementById("backupbtn");
backupbtn.addEventListener("click", inputdatahandler);


// for getting data
function inputdatahandler(){
    debugger
console.log("button is clicked");

const xhr = new XMLHttpRequest();


xhr.open('POST','https://dummy.restapiexample.com/api/v1/create',true);
xhr.setRequestHeader('content-type', 'application/json');


// it for onprogress
xhr.onprogress= function(){
    console.log("in progress");
}

//here we get data on load  
xhr.onload= function(){
    console.log("it is loaded");
    console.log(this.responseText);
    dat.innerHTML =this.responseText;
}

// we can request
params =`	{"name":"Mallikarjun","salary":"35000","age":"23"}`;



xhr.send(params);

}
