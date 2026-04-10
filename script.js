let random_number;
let roond = 1;

function main(number){
    if(roond <= 20){
        if(number > random_number){
            document.getElementById("result").innerHTML = `<h1>The Number ${number} is Hard!<h1>`;
            roond++
            document.getElementById("add-rounds").textContent = roond;
            return;
        }else if(number < random_number){
            document.getElementById("result").innerHTML = `<h1>The Number ${number} is  Low!<h1>`;
            document.getElementById("add-rounds").textContent = roond;
            roond++
            return;
        }else if(number == random_number){
            document.getElementById("result").innerHTML = `<h1 style="color: green;">Well Done<h1>`;
            document.getElementById("add-rounds").textContent = roond;
            roond++
            return;
        }
        
    }else document.getElementById("result").innerHTML = `<h1 style="color: red;">Game Over<h1>`; return;
}

function log(){
    if(!random_number){
        document.getElementById("result").innerHTML = '<h1 style="color: red;">Plz Click Ganerat Number<h1>';
        return;
    }
    let values = document.getElementById("number-enter").value;
    if(!values || isNaN(values)) {
        document.getElementById("result").innerHTML = '<h1 style="color: red;">Plz Enter The Number<h1>';
        return;
    };
    main(Number(values));
}

function gen(){
    random_number = Math.floor(Math.random()*101);
    document.getElementById("result").innerHTML = '<h1 style="color: green;">Number is Gan<h1>';
}