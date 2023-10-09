
// JavaScript to toggle mobile menu -->//

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});




//bank aar kaj hove 

let depositebutton =document.getElementById('deposite_button');

depositebutton.addEventListener('click',function(){

console.log("depositebutton cliked");


let depositeField=document.getElementById('deposite_field');

let depositefieldstring= depositeField.value;

console.log(depositefieldstring);
depositeField.value = ""

//deposite


let depositetotal = document.getElementById('deposit-total')

let preveousdepositetotalstring = depositetotal.innerText;
console.log(preveousdepositetotalstring);

let newdepositetotal=parseInt(preveousdepositetotalstring)+parseInt(depositefieldstring);

depositetotal.innerText =  newdepositetotal;
console.log(newdepositetotal);


//oprer blance 


let blanceinfom=document.getElementById('blance-total');

let preveousblanceinfomstring = blanceinfom.innerText
console.log(preveousblanceinfomstring)
console.log(depositefieldstring)

let newblancetotal=parseInt(preveousblanceinfomstring) + parseInt(depositefieldstring)

blanceinfom.innerText = newblancetotal;

console.log( newblancetotal );


});

//withdarw ar kaj 

let withdarbutton=document.getElementById('withdraw-btn');
withdarbutton.addEventListener( 'click',function(){
console.log("withdrawbutton");

let placeholderwithdraw=document.getElementById('placeholder-withdraw');

let placeholderwithdrawstring= placeholderwithdraw.value;
console.log(placeholderwithdrawstring);

placeholderwithdraw.value=""
////

//



let withdrawminas = document.getElementById('withdraw-minas')

let preveouswithdrawstring = withdrawminas.innerText;
console.log(preveouswithdrawstring );

let newdepositetotal=parseInt(preveouswithdrawstring )+parseInt(placeholderwithdrawstring);

withdrawminas.innerText =  newdepositetotal;
console.log(newdepositetotal);

///






let blanceinfom=document.getElementById('blance-total');

let preveousblanceinfomstring = blanceinfom.innerText

let newblancetotal=parseInt(preveousblanceinfomstring) - parseInt( newdepositetotal)

blanceinfom.innerText = newblancetotal;

console.log( newblancetotal );










});















