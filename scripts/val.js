document.Cart.addEventListener("submit", check);

const fname = document.querySelector('.nameL');
const numb = document.querySelector('.numL');
const date = document.querySelector('.dateL');
const loc = document.querySelector('.locL');
const pick = document.querySelector('.pickL');
const rad = document.querySelector('.del');
const total = document.querySelector('.ttlL');
const rad1 = document.querySelector('#rad1');
const rad2 = document.querySelector('#rad2');
const rad3 = document.querySelector('#rad3');

const today = new Date().toJSON().slice(0,10);
// validation function
function check(e) {

    var valid = true;
    if(Cart.fName.value === "") {
        fname.style.color = 'red';
        valid = false;
        e.preventDefault();
    }
    if(Cart.num.value === "") {
        numb.style.color = 'red';
        valid = false;
        e.preventDefault();
    }
    // if input is notnumber show error
    if(isNaN(Cart.num.value)){
        numb.style.color = 'red';
        valid = false;
        e.preventDefault();
    }
    if(Cart.date.value === "") {
        date.style.color = 'red';
        valid = false;
        e.preventDefault();
    }
    if(Cart.date.value < today) {
        date.style.color = 'red';
        valid = false;
        e.preventDefault();
    }
    if(Cart.loc.options.selectedIndex === 0){
        loc.style.color = 'red';
        valid = false;
        e.preventDefault();
    }
    // if none of these are checked show error
    if(!rad1.checked  && !rad2.checked && !rad3.checked){
        rad.style.color = 'red';
        valid = false;
        e.preventDefault();
    }
    if(valid == false){
        return false;
    }
    sessionStorage.setItem('Name', Cart.fName.value);
    sessionStorage.setItem('Num', Cart.num.value);
    sessionStorage.setItem('Total', Cart.ttl.value)
    window.open('summary.html');
    return valid;    
}

// events

document.querySelector('#fName').addEventListener("blur", function(){
    if(this.value !== ""){
        fname.style.color = 'black'; 
    };
});
document.querySelector('#num').addEventListener("blur", function(){
    if(this.value !== ""){
        numb.style.color = 'black'; 
    };
});
document.querySelector('#date').addEventListener("blur", function(){
    if(this.value !== ""){
        date.style.color = 'black'; 
    };
});
document.querySelector('#loc').addEventListener("blur", function(){
    if(this.options.selectedIndex !== 0){
        loc.style.color = 'black'; 
    };
});
rad1.addEventListener("blur", function(){
    if(this.checked == true){
        rad.style.color = 'black'; 
    };
});
rad2.addEventListener("blur", function(){
    if(this.checked == true){
        rad.style.color = 'black';
    };
});
rad3.addEventListener("blur", function(){
    if(this.checked == true){
        rad.style.color = 'black'; 
    };
});

// reset function
document.Cart.addEventListener("reset", clearall);

function clearall() {
    fname.style.color = 'black';
    numb.style.color = 'black';
    date.style.color = 'black';
    loc.style.color = 'black';
    rad.style.color = 'black'; 
    rad.style.color = 'black'; 
    document.querySelector('.qt1').textContent = '0'
    document.querySelector('.qt2').textContent = '0'
    document.querySelector('.qt3').textContent = '0'
    document.querySelector('.ttl1').textContent = '0'
    document.querySelector('.ttl2').textContent = '0'
    document.querySelector('.ttl3').textContent = '0'
};
