let name1 ={
    firstname: "mallesh",
    lastname:"katare",

    printfullname : function( city, joblocation){

        console.log(this.firstname+" "+this.lastname+". He is lived in "+ city+ " and work in "+joblocation);
    }
}
// normal method to to have this. 

name1.printfullname("domblivil", "kalyan");


// ###call ###
// function borrowing
// in this we pass the argement by "","" comma 

let name2 ={
    firstname:"amol",
    lastname: "katare"
}

// call
name1.printfullname.call(name2 ,"delhi","gurgoan");



// apply
// in this we pass all argument in array

name1.printfullname.apply(name2,["pune", "chakan"])

// bind

let printfull2= name1.printfullname.bind(name2,"mangolare","KA");
console.log(printfull2());







// another example by seperate function ----------------------------------------------------

// call function another example by seperate function 

let name3 ={
    firstname:"Isha",
    lastname:"patil"
}

let printfullname = function(city,state){
    console.log(this.firstname+" "+ this.lastname +". she is from "+city + " and state is " +state);
}

let name4 ={
    firstname:"supriya",
    lastname:"patil"
}


printfullname.call(name3,"mumabi", "maharashtra");  

printfullname.call(name4,"pune","maharashtra");


// apply

printfullname.apply(name3,["kalyan", "MH"]);
printfullname.apply(name4,["thane","MH"]);


// bind
// blind is a function that help you to create the another function that you can execute later with the new context of "this"  that is provides

let printfull = printfullname.bind(name4,"mangolare","kA");
console.log(printfull())