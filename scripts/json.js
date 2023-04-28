const boxdiv = document.querySelector('.item1');
const boxdiv2 = document.querySelector('.item2');
const boxdiv3 = document.querySelector('.item3');

let requestURL = 'data.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL)
request.responseType = 'text';
request.send();

// Fetching JSON data 
request.onreadystatechange = function(){
    if (request.readyState === XMLHttpRequest.DONE){
       if (request.status === 200) {
           const dataContent = request.response;
           const datas = JSON.parse(dataContent);
           firstrow(datas);
           secondrow(datas);
           thirdrow(datas);
        }
        else{
            alert("there is somthing wrong.")
        }
    };
};
// Funtion to assign json data to created elements in the first row of product
function firstrow(jobj){
    const img = document.querySelector('.i1');
    const p1 = document.querySelector('.i1p');
    const qty = document.querySelector('.qt1');
    const prc = document.querySelector('.prc1');
    const ttl = document.querySelector('.ttl1');
    const min = document.querySelector('.minus');
    const plu = document.querySelector('.plus');
    // assigning values
    img.src = jobj['img'];
    p1.textContent = jobj['img1name'];
    boxdiv.appendChild(img);
    boxdiv.appendChild(p1);
    plu.textContent = '+';
    qty.textContent = 0;
    min.textContent = '-';
    prc.textContent = 15;
    ttl.textContent = 0;
    boxdiv.appendChild(plu);
    boxdiv.appendChild(qty);
    boxdiv.appendChild(min);
    boxdiv.appendChild(prc);
    boxdiv.appendChild(ttl);
    
// css
    img.style.width = '150px';
    boxdiv.style.display = 'flex';
    boxdiv.style.alignItems = 'center';
    boxdiv.style.justifyContent = 'space-between';
    boxdiv.style.paddingRight = '80px';
    
};
// Funtion to assign json data to created elements in the second row of product
function secondrow(jobj){
    const img = document.querySelector('.i2');
    const p1 = document.querySelector('.i2p');
    const qty = document.querySelector('.qt2');
    const prc = document.querySelector('.prc2');
    const ttl = document.querySelector('.ttl2');
    const min = document.querySelector('.minus2');
    const plu = document.querySelector('.plus2');
    // assigning values
    img.src = jobj['img2'];
    p1.textContent = jobj['img2name'];
    boxdiv2.appendChild(img);
    boxdiv2.appendChild(p1);
    plu.textContent = '+';
    qty.textContent = 0;
    min.textContent = '-';
    prc.textContent = 500;
    ttl.textContent = 0;
    boxdiv2.appendChild(plu);
    boxdiv2.appendChild(qty);
    boxdiv2.appendChild(min);
    boxdiv2.appendChild(prc);
    boxdiv2.appendChild(ttl);
    
// css
    img.style.width = '150px';
    boxdiv2.style.display = 'flex';
    boxdiv2.style.alignItems = 'center';
    boxdiv2.style.justifyContent = 'space-between';
    boxdiv2.style.paddingRight = '80px';
    
};
// Funtion to assign json data to created elements in the third row of product
function thirdrow(jobj){
    const img = document.querySelector('.i3');
    const p1 = document.querySelector('.i3p');
    const qty = document.querySelector('.qt3');
    const prc = document.querySelector('.prc3');
    const ttl = document.querySelector('.ttl3');
    const min = document.querySelector('.minus3');
    const plu = document.querySelector('.plus3');
    // assigning values
    img.src = jobj['img3'];
    p1.textContent = jobj['img3name'];
    boxdiv3.appendChild(img);
    boxdiv3.appendChild(p1);
    plu.textContent = '+';
    qty.textContent = 0;
    min.textContent = '-';
    prc.textContent = 20;
    ttl.textContent = 0;
    // appending
    boxdiv3.appendChild(plu);
    boxdiv3.appendChild(qty);
    boxdiv3.appendChild(min);
    boxdiv3.appendChild(prc);
    boxdiv3.appendChild(ttl);
    
// css
    img.style.width = '150px';
    boxdiv3.style.display = 'flex';
    boxdiv3.style.alignItems = 'center';
    boxdiv3.style.justifyContent = 'space-between';
    boxdiv3.style.paddingRight = '80px';
    
};