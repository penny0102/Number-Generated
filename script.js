let random_number = 5;
let limit = 0;

function main(number){
    if(number > random_number){
        document.getElementById("result").innerHTML = `<h1>The Number ${number} is Hard!<h1>`;
        return;
    }else if(number < random_number){
        document.getElementById("result").innerHTML = `<h1>The Number ${number} is  Low!<h1>`;
        return;
    }else if(number == random_number){
        document.getElementById("result").innerHTML = `<h1 style="color: green;">Well Done<h1>`;
        return;
    }
}


function log(){
    if(!random_number){
        document.getElementById("result").innerHTML = '<h1 style="color: red;">Plz Click Ganerat Number<h1>';
        return;
    }
    let values = document.getElementById("number-enter").value;
    if(!values) {
        document.getElementById("result").innerHTML = '<h1 style="color: red;">Plz Enter The Number<h1>';
        return;
    };
    main(Number(values));
}

function gen(){
    random_number = Math.floor(Math.random()*100);
    document.getElementById("result").innerHTML = '<h1 style="color: green;">Number is Gan<h1>';
}