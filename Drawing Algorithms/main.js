// document.querySelector('.logn').onsubmit = (e) => {
//     e.preventDefault();
// }
// document.querySelector('.logn button').onclick = function () {
//     this.innerHTML = '<span class="ldbtn"></span>';
// }
let  p = 0, dyr = 0, dxr = 0;
let frm = document.querySelector('form'),
sbmt = frm.querySelector('.sbmt'),
tbl = document.querySelector('tbody');
// console.log(tbl)

var algonm = " ";

document.getElementsByName('drw').forEach(item => item.onchange = function(){
// console.log(this.id)

algonm = this.nextElementSibling.innerHTML+" Algorithm";
console.log(algonm);
if(this.id == 'mdc'){
    document.getElementById('xn').disabled = true;
    document.getElementById('xn').value = "0";
    frm.querySelector('.scnd').innerHTML = "Enter radius";
}
// else if(this.id == 'mdel'){
//     document.getElementById('xn').disabled = false;
//    document.getElementById('xn').placeholder = "Enter rx";
//    document.getElementById('yn').placeholder = "Enter ry";
//     frm.querySelector('.scnd').innerHTML = "Enter radius";
// }
else{
    document.getElementById('xn').value = "";
    document.getElementById('xn').placeholder = "Enter Xn";
    document.getElementById('xn').disabled = false;
    frm.querySelector('.scnd').innerHTML = "Enter Second point ";
}
});
document.querySelector('.rst').onclick = function(e){
document.querySelector('table').style.display = 'none';
location.href = '';
}


let k = 0;
sbmt.onclick = function(e){
e.preventDefault();
document.querySelector('table').style.display = 'none';
location.href = '#res';
console.clear();
let x0 = document.getElementById('x0').value,
y0 = document.getElementById('y0').value;
// console.log(document.getElementsByName('drw'));

if(x0 != '' &&  y0 != '' && xn != '' && yn != '' && (document.getElementById('dda').checked || document.getElementById('br').checked || document.getElementById('mdc').checked || document.getElementById('mdl').checked)){
x0 = parseInt(document.getElementById('x0').value);
y0 = parseInt(document.getElementById('y0').value);
console.log(algonm);
document.querySelector('.algrsmnm').innerHTML = algonm;
// +===========================================================
if(document.getElementById('dda').checked){
    k = 0;
document.querySelector('table').style.display = 'table';
tbl.innerHTML = `<tr><td>x</td>
<td>y</td>
<td>d<sub>x</sub></td>
<td>d<sub>y</sub></td>
<td>d<sub>x</sub> > d<sub>y</sub></td>
<td>x-incr</td>
<td>y-incr</td>
<td>Round(x)</td>
<td>Round(y)</td>
<td>plot(x, y)</td></tr>`;
plotdd(x0, y0);
}
// +===========================================================

// +===========================================================
else if(document.getElementById('br').checked){
    k = 0;
document.querySelector('table').style.display = 'table';
tbl.innerHTML = `
<tr>
<td>k</td>
<td>p<sub>k</sub> < 0</td>
<td>p<sub>k+1</sub></td>
<td>plot(x, y)</td></tr>`;
dxr = parseInt(document.getElementById('xn').value) - x0;
dyr = parseInt(document.getElementById('yn').value) - y0;

p = (2*dyr) - dxr;

// console.log(p);
plotbr(x0, y0);
}
// +===========================================================

// +===========================================================
else if(document.getElementById('mdc').checked){
    k = 0;
document.querySelector('table').style.display = 'table';
tbl.innerHTML = `
<tr>
<td>k</td>
<td>p<sub>k</sub> < 0</td>
<td>p<sub>k+1</sub></td>
<td>plot(x, y)</td></tr>`;
dyr = parseInt(document.getElementById('yn').value);

p = 1 - dyr;

console.log(p);
plotmd(x0, y0);
}
// +===========================================================

// +===========================================================
else if(document.getElementById('mdl').checked){
    k = 0;
document.querySelector('table').style.display = 'table';
tbl.innerHTML = `
<tr>
<td>k</td>
<td>p<sub>k</sub> < 0</td>
<td>p<sub>k+1</sub></td>
<td>plot(x, y)</td></tr>`;
dxr = parseInt(document.getElementById('xn').value) - x0;
dyr = parseInt(document.getElementById('yn').value) - y0;

p = (dyr) - (dxr/2);

console.log(p);
plotln(x0, y0);
}
// +===========================================================

// +===========================================================
// else if(document.getElementById('mdel').checked){
//     k = 0;
// document.querySelector('table').style.display = 'table';
// tbl.innerHTML = `
// <tr>
// <td>k</td>
// <td>p<sub>k</sub> < 0</td>
// <td>p<sub>k+1</sub></td>
// <td>plot(x, y)</td></tr>`;
// dxr = parseInt(document.getElementById('xn').value) - x0;
// dyr = parseInt(document.getElementById('yn').value) - y0;

// p = (dyr) - (dxr/2);

// console.log(p);
// plotmdel(x0, y0);
// }
// +===========================================================

}else{
alert('All inputs and algorithm type');
}
}



// DDA Algorithm ==================================================================
function plotdd(a, b){

let dx = Math.abs(parseInt(document.getElementById('xn').value) - a),
dy = Math.abs(parseInt(document.getElementById('yn').value) - b),
steps = 0;

if(dx > dy){
steps = dx;
}else{
steps = dy;
}

let x_inc = dx / steps,
 y_inc = dy / steps;

a = a + parseFloat(x_inc.toFixed(3));
b = b + parseFloat(y_inc.toFixed(3));

let td = `
   <td>${dx}</td>
    <td>${dy}</td>
    <td>${dx > dy}</td>
    <td>${Number.isInteger(x_inc) ? x_inc : x_inc.toFixed(3)}</td>
    <td>${Number.isInteger(y_inc) ? y_inc : y_inc.toFixed(3)}</td>
    <td>${Math.round(a)}</td>
    <td>${Math.round(b)}</td>
    <td>plot(${Math.round(a)},${Math.round(b)})</td>`;

    let etd = `
    <td colspan='8'>Then the other end point of the line is reached</td>`;

tbl.insertAdjacentHTML('beforeend',`<tr>
    <td>${Number.isInteger(a) ? a : a.toFixed(3)}</td>
    <td>${Number.isInteger(b) ? b : b.toFixed(3)}</td>
    ${a < parseInt(document.getElementById('xn').value) ? td : etd}
    </tr>`);


if (Math.floor(a) < parseInt(document.getElementById('xn').value)){
plotdd(a, b);
}

};
// ==================================================================




// Bresengham Algorithm ==================================================================
function plotbr(a, b){
pk = p;
// console.log(a + " " +b + " " + p + " " + dyr + " " + dxr + " " + pk + " " + ++k);
let tde = `
    <td>${k}</td>
    <td>${pk < 0}</td>
    <td>${p}</td>
    <td>plot(${a},${b})</td>`;

    let init = ` 
    <td colspan='3'>initially</td>
    <td>plot(${a},${b})</td>`;
// console.log(a + " " + parseInt(document.getElementById('x0').value));
let td = ` ${a == parseInt(document.getElementById('x0').value) ? init : tde}`;


let etd = `
    <td colspan='4'>Then the other end point of the line is reached</td>`;

tbl.insertAdjacentHTML('beforeend',`<tr>
    ${Math.round(a) <= parseInt(document.getElementById('xn').value) ? td : etd}
    </tr>`);

if(a <= parseInt(document.getElementById('xn').value)){
if(p < 0){
    if(a != parseInt(document.getElementById('x0').value)){
        ++k;
    }
    p = p + (2*dyr);
    plotbr(a+1, b);
}else{
    if(a != parseInt(document.getElementById('x0').value)){
        ++k;
    }
    p = (p + (2*dyr)) - (2*dxr);
    plotbr(a+1, b+1);
}
}
}
// ==================================================================


// Midpoint Line ==================================================================
function plotln(a, b){
pk = p;
// console.log(a + " " +b + " " + p + " " + dyr + " " + dxr + " " + pk + " " + ++k);
let tde = `
    <td>${k}</td>
    <td>${pk < 0}</td>
    <td>${p}</td>
    <td>plot(${a},${b})</td>`;

    let init = ` 
    <td colspan='3'>initially</td>
    <td>plot(${a},${b})</td>`;
// console.log(a + " " + parseInt(document.getElementById('x0').value));
let td = ` ${a == parseInt(document.getElementById('x0').value) ? init : tde}`;



    let etd = `
    <td colspan='4'>Then the other end point of the line is reached</td>`;

tbl.insertAdjacentHTML('beforeend',`<tr>
    ${Math.round(a) <= parseInt(document.getElementById('xn').value) ? td : etd}
    </tr>`);

if(a <= parseInt(document.getElementById('xn').value)){
if(p < 0){
    if(a != parseInt(document.getElementById('x0').value)){
        ++k;
    }
    p = p + (dyr);
    plotln(a+1, b);
}else{
    if(a != parseInt(document.getElementById('x0').value)){
        ++k;
    }
    p = (p + (dyr)) - (dxr);
    plotln(a+1, b+1);
}
}
}
// ==================================================================


// Midpoint Circle  ==================================================================
function plotmd(a, b){
pk = p;
console.log(a + " " +b + " " + p + " " + pk );

let tde = `
    <td>${k}</td>
    <td>${pk < 0}</td>
    <td>${p}</td>
    <td>plot(${a},${b})</td>`;

    let init = ` 
    <td colspan='3'>initially</td>
    <td>plot(${a},${b})</td>`;
// console.log(a + " " + parseInt(document.getElementById('x0').value));
let td = ` ${a == parseInt(document.getElementById('x0').value) ? init : tde}`;


let etd = `
    <td colspan='4'>Then the other end point of the line is reached</td>`;

tbl.insertAdjacentHTML('beforeend',`<tr>
    ${a <= b ? td : etd}
    </tr>`);

if(a <= b){
if(p <= 0){
    if(a != parseInt(document.getElementById('x0').value)){
        ++k;
    }
    p = p + (2*a) + 3;
    plotmd(a+1, b);
}else{
    if(a != parseInt(document.getElementById('x0').value)){
        ++k;
    }
    p = p + (2*(a - b))  + 3;
    plotmd(a+1, b-1);
}
}
}
// ==================================================================


// ==================================================================
// function plotmdel(a, b){
// pk = p;
// console.log(a + " " +b + " " + p + " " + pk );

// let tde = `
//     <td>${k}</td>
//     <td>${pk < 0}</td>
//     <td>${p}</td>
//     <td>plot(${a},${b})</td>`;

//     let init = ` 
//     <td colspan='3'>initially</td>
//     <td>plot(${a},${b})</td>`;
// // console.log(a + " " + parseInt(document.getElementById('x0').value));
// let td = ` ${a == parseInt(document.getElementById('x0').value) ? init : tde}`;



//     let etd = `
//     <td colspan='4'>Then the other end point of the line is reached</td>`;

// tbl.insertAdjacentHTML('beforeend',`<tr>
//     ${a <= b ? td : etd}
//     </tr>`);

// if(a <= b){
// if(p <= 0){
//     if(a != parseInt(document.getElementById('x0').value)){
//         ++k;
//     }
//     p = p + (2*a) + 3;
//     plotmdel(a+1, b);
// }else{
//     if(a != parseInt(document.getElementById('x0').value)){
//         ++k;
//     }
//     p = p + (2*(a - b))  + 3;
//     plotmdel(a+1, b-1);
// }
// }
// }
// ==================================================================
