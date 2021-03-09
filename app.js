'use strict';
let form=document.getElementById('studentForm');
form.addEventListener('submit' ,studentForm);
let results= document.getElementById('results');
let table=document.createElement('table');
results.appendChild(table);


function studentForm(event){
event.preventDefault();
let studentEmail=event.target.email.value;
console.log(studentEmail);
let studentMobile=event.target.mobile.value;
console.log(studentMobile);
let select=event.target.selecting.value;
console.log(select);
new studentInformation(studentEmail,studentMobile,select);
savedata();
renderTable();

}
let arrayOfObjects=[];
function studentInformation(email,mobile,tuition){
this.email=email;
this.mobile=mobile;
this.select=tuition;
this.name=nameSu();
this.age=age();
arrayOfObjects.push(this);

}
console.log(arrayOfObjects);
function nameSu(){
    for(let o=0;o<arrayOfObjects.length;o++){
    let studentName= arrayOfObjects[o].email;
    let st=studentName.split('@');
    let names=st[0]
    console.log(st);
    return names;
    }
}
 
function age(){
for(let p=0;p<=arrayOfObjects.length;p++){
    return Math.floor(Math.random() * (25- 18 + 1) + 18)
}
}
function header(){
    let trEl=document.createElement('tr');
    table.appendChild(trEl);
    let thElOne=document.createElement('th');
    trEl.appendChild(thElOne);
    thElOne.textContent="id";

    let thElTwo=document.createElement('th');
    trEl.appendChild(thElTwo);
    thElTwo.textContent="Name";

    let thElThree=document.createElement('th');
    trEl.appendChild(thElThree);
    thElThree.textContent="Email";

    let thElfour=document.createElement('th');
    trEl.appendChild(thElfour);
    thElfour.textContent="Mobile";
    let thElfive=document.createElement('th');
    trEl.appendChild(thElfive);
    thElfive.textContent="Age";
    let thElsix=document.createElement('th');
    trEl.appendChild(thElsix);
    thElsix.textContent="Tuition";


}


function renderTable(){
    table.textContent="";
    header();
    for (let i=0; i<arrayOfObjects.length;i++){
        let trElre=document.createElement('tr');
        table.appendChild(trElre);
        let tdElq=document.createElement('td');
        trElre.appendChild(tdElq);
        let id=1+i;
        tdElq.textContent=id;
        let tdElw=document.createElement('td');
        trElre.appendChild(tdElw);
        tdElw.textContent=arrayOfObjects[i].name;
        let tdEle=document.createElement('td');
        trElre.appendChild(tdEle);
        tdEle.textContent=arrayOfObjects[i].email;
        let tdElt=document.createElement('td');
        trElre.appendChild(tdElt);
        tdElt.textContent=arrayOfObjects[i].mobile;
        let tdEly=document.createElement('td');
        trElre.appendChild(tdEly);
        tdEly.textContent=arrayOfObjects[i].age;
        let tdElu=document.createElement('td');
        trElre.appendChild(tdElu);
        tdElu.textContent=arrayOfObjects[i].select;

        
        
        
        
    }


total();

}
function total(){
    let total=0;
    for(let y=0;y<arrayOfObjects.length;y++){

        let subtotal=parseInt(arrayOfObjects[y].select);
        total=total+subtotal;
    }
    let p=document.createElement('p');
    results.appendChild(p);
    p.textContent=`Total :${total}`
}
function savedata(){
    let save=JSON.stringify(arrayOfObjects);
    localStorage.setItem('students',save);
}
function getdata(){
    let get=localStorage.getItem('students');
    let studentinf=JSON.parse(get);
    if(studentinf){
        arrayOfObjects=studentinf;
    }
    renderTable();
}
getdata();