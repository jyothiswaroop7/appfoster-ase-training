var input = document.getElementById("number");
var sp = document.getElementById("split");
var button = document.getElementById("bttn");
var item_holder = document.getElementById("holder")
function fetchData(){
    if(inputlength() > 0){
        let input_number = Number(input.value) ;
        let split_number = Number(sp.value) ;
        let split_size = Math.floor(input_number/split_number);
        let remain = input_number%split_number;
        let bigone = split_size+remain;
        populate(bigone, split_size, split_number, input_number);
    }   
}
function inputlength(){
    return input.value.length;
}
function populate(bigsize, smallsize, split_number,input_number){
    item_holder.innerHTML='';
    let B_text = document.createTextNode(bigsize);
    let B_P = document.createElement('p');
    B_P.style.textAlign='center';
    B_P.style.color='white';
    B_P.style.fontSize='25px';
    B_P.appendChild(B_text);
    let B_div = document.createElement('div');
    B_div.style.width = (bigsize/input_number)*100+'%';
    B_div.style.height='100px';
    B_div.style.backgroundColor=`rgba(${randomColor()},${randomColor()},${randomColor()},${randomOpacity()})`;
    B_div.appendChild(B_P);
    item_holder.appendChild(B_div);
    for(let i=1; i<split_number; i++){
        let S_text = document.createTextNode(smallsize);
        let S_P = document.createElement('p');
        S_P.style.textAlign='center';
        S_P.style.color='white';
        S_P.style.fontSize='25px';
        S_P.appendChild(S_text);
        let S_div = document.createElement('div');
        S_div.style.width = (smallsize/input_number)*100+'%';
        S_div.style.height='100px';
        S_div.style.backgroundColor=`rgba(${randomColor()},${randomColor()},${randomColor()},${randomOpacity()})`;
        S_div.appendChild(S_P);
        item_holder.appendChild(S_div);
    }
    input.value=''
    sp.value=''
}
function randomColor(){
    return Math.floor(Math.random() * (255 - 0 + 1) ) + 0;
}
function randomOpacity(){
    return Math.random();
}
button.addEventListener('click',fetchData);