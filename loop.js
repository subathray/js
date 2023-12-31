
//Loop(3 types)

//1.for loop

for (var i = 1; i < 10; i++) {     // 9 Arun
    console.log("Arun");
}

for (var i = 1; i < 10; i++) {     // 1-9
    console.log(i);
}

for (var i = 10; i > 0; i--) {    // 10 - 1
    console.log(i)
}

for (var i = 7; i > 2; i--) {     // 7 - 3
    console.log(i)
}

for (var i = 0; i < 5; i++)     // 0-4 alternate eve odd
{
    if (i % 2 == 0) {
        console.log(i, "is even")
    } else { console.log(i, "is odd") }

}

for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 3; j++) {
        console.log(i, j);
    }
}

for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 3; j++) {
        for (var k = 1; k <= 3; k++) {
            console.log(i, j, k);
        }
    }
}



for (var i = 1; i <= 5; i++) {   // 5 rows ***
    console.log("***");
    console.log("");
}

for (var i = 1; i <= 3; i++) {      //12345
    for (var j = 1; j <= 5; j++) {  //12345
        console.log(j);             //12345
    }
    console.log("");
}


for (var i = 1; i <= 3; i++) {          //11111
    for (var j = 1; j <= 5; j++) {      //22222
        console.log(i);                 //33333
    }
    console.log("");
}


for (var i = 1; i <= 5; i++) {       //***
    for (var j = 1; j <= 5; j++) {   //***
        console.log("");          //**
    }                              //***
    //console.log("");             //***
}




for (var i = 1; i <= 3; i++) {       //12345
    for (var j = 1; j <= 5; j++) {   //12345
        console.log(j);             //12345
    }
    console.log("")
}