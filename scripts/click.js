

const img1 = document.querySelector(".i1");
const i1p = document.querySelector(".i1p");
const plu = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const qty1 = document.querySelector('.qt1');
const prc1 = document.querySelector('.prc1');
const ttl1 = document.querySelector('.ttl1');
plu.addEventListener('click', add1);
img1.addEventListener('click', add1);
minus.addEventListener('click', min1);

// function adds the quanity and clears the price for the first row
function add1(){
    price = parseInt(prc1.textContent);
    if (qty1.textContent == 0){
        qty1.textContent = parseInt(qty1.textContent)+1;
        ttl1.textContent = price;
        sessionStorage.setItem('Item1', i1p.textContent);
        console.log(sessionStorage.getItem('Item1'));
    }
    else{
        
        qty1.textContent = parseInt(qty1.textContent)+1;
        ttl1.textContent = parseInt(ttl1.textContent)+price;
    }
    document.querySelector("#ttl").value = parseInt(ttl1.textContent)+parseInt(ttl2.textContent)+parseInt(ttl3.textContent);
    // console.log((ttl2+ttl2+ttl3))

}

// function removes the quanity and clears the price for the first row
function min1(){
    price = parseInt(prc1.textContent);
    if (qty1.textContent == 0){
        ttl1.textContent = 0;
    }
    // if quantity is 1 set text as 0 and stop subtracting so value doesnt go in negative
    else if(qty1.textContent == 1){
        sessionStorage.removeItem('Item1', i1p.textContent);
        console.log(sessionStorage.getItem('Item1'));
        qty1.textContent = 0;
        ttl1.textContent = 0;
        document.querySelector("#ttl").value = document.querySelector("#ttl").value - price;
    }
    else{
        qty1.textContent = parseInt(qty1.textContent)-1;
        ttl1.textContent = parseInt(ttl1.textContent)-price;
        document.querySelector("#ttl").value = document.querySelector("#ttl").value - price;
    }
}


const img2 = document.querySelector(".i2");
const i2p = document.querySelector(".i2p");
const plu2 = document.querySelector(".plus2");
const minus2 = document.querySelector(".minus2");
const qty2 = document.querySelector('.qt2');
const prc2 = document.querySelector('.prc2');
const ttl2 = document.querySelector('.ttl2');
plu2.addEventListener('click', add2);
img2.addEventListener('click', add2);
minus2.addEventListener('click', min2);

// function adds the quanity and clears the price for the second row
function add2(){
    price = parseInt(prc2.textContent);
    if (qty2.textContent == 0){
        qty2.textContent = parseInt(qty2.textContent)+1;
        ttl2.textContent = price;
        sessionStorage.setItem('Item2', i2p.textContent);
        console.log(sessionStorage.getItem('Item2'));
    }
    else{
        qty2.textContent = parseInt(qty2.textContent)+1;
        ttl2.textContent = parseInt(ttl2.textContent)+price;
    }
    document.querySelector("#ttl").value = parseInt(ttl1.textContent)+parseInt(ttl2.textContent)+parseInt(ttl3.textContent);
}
// function removes the quanity and clears the price for the second row
function min2(){
    price = parseInt(prc2.textContent);
    if (qty2.textContent == 0){
        ttl2.textContent = 0;
    }
    // if quantity is 1 set text as 0 and stop subtracting so value doesnt go in negative
    else if (qty2.textContent == 1){
        sessionStorage.removeItem('Item2', i2p.textContent);
        console.log(sessionStorage.getItem('Item2'));
        qty2.textContent = 0;
        ttl2.textContent = 0;
        document.querySelector("#ttl").value = document.querySelector("#ttl").value - price;
    }
    else{
        qty2.textContent = parseInt(qty2.textContent)-1;
        ttl2.textContent = parseInt(ttl2.textContent)-price;
        document.querySelector("#ttl").value = document.querySelector("#ttl").value - price;
    }
}

const img3 = document.querySelector(".i3");
const i3p = document.querySelector(".i3p");
const plu3 = document.querySelector(".plus3");
const minus3 = document.querySelector(".minus3");
const qty3 = document.querySelector('.qt3');
const prc3 = document.querySelector('.prc3');
const ttl3 = document.querySelector('.ttl3');
plu3.addEventListener('click', add3);
img3.addEventListener('click', add3);
minus3.addEventListener('click', min3);

// function adds the quanity and clears the price for the third row
function add3(){
    price = parseInt(prc3.textContent);
    if (qty3.textContent == 0){
        qty3.textContent = parseInt(qty3.textContent)+1;
        ttl3.textContent = price;
        sessionStorage.setItem('Item3', i3p.textContent);
        console.log(sessionStorage.getItem('Item3'));
    }
    else{
        qty3.textContent = parseInt(qty3.textContent)+1;
        ttl3.textContent = parseInt(ttl3.textContent)+price;
    }
    document.querySelector("#ttl").value = parseInt(ttl1.textContent)+parseInt(ttl2.textContent)+parseInt(ttl3.textContent);
}

// function removes the quanity and clears the price for the third row
function min3(){
    price = parseInt(prc3.textContent);
    if (qty3.textContent == 0){
        ttl3.textContent = 0;
    }
    // if quantity is 1 set text as 0 and stop subtracting so value doesnt go in negative
    else if (qty3.textContent == 1){
        sessionStorage.removeItem('Item3', i3p.textContent);
        console.log(sessionStorage.getItem('Item3'));
        qty3.textContent = 0;
        ttl3.textContent = 0;
        document.querySelector("#ttl").value = document.querySelector("#ttl").value - price;
    }
    else{
        qty3.textContent = parseInt(qty3.textContent)-1;
        ttl3.textContent = parseInt(ttl3.textContent)-price;
        document.querySelector("#ttl").value = document.querySelector("#ttl").value - price;
    }
};

// clearing session data

document.onload = clearstore();
function clearstore(){;
    console.log('cleared');
    sessionStorage.removeItem('Item1', i1p.textContent);
    sessionStorage.removeItem('Item2', i2p.textContent);
    sessionStorage.removeItem('Item3', i3p.textContent);
};
