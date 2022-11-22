
//classname three h3 with defined array
// document.getElementsByClassName('chng-colh3')['0'].style.color = 'blue';



//tagname color change with loop

const h3element = document.getElementsByTagName('h3');
for(let i=0;i<h3element.length;i++){
    h3element[i].style.color = 'blueviolet';
}


//with id change color of second h3

document.getElementById('demo').style.color='green';

//card radius change with js

document.getElementsByClassName('container shoes')['0'].style.backgroundColor='hotpink';

//card radius change  with classname

const radiusCard = document.getElementsByClassName('card');
for (let i=0;i<radiusCard.length;i++){
    radiusCard[i].style.borderRadius = '30px 200px';
}

//btn console log

document.getElementById('click-conso').addEventListener
('click',function()
{
    console.log('hey boy');
})


//btn seclect for delete
 const delBtns = document.getElementsByClassName('buy-now-button');
for(const delBtn of delBtns )
{
  delBtn.addEventListener
   ('click',function(event){
    event.target.parentNode.parentNode.style.display = 'none';
            
    //  const cards =document.getElementsByClassName('card-deck');
   
    //  for(let i=0;i<cards.length;i++){
    //     cards[i].style.display = 'none';
    //  }
  })

  }

//   function (event) {
//     event.target.parentNode.parentNode.style.display = 'none';

// btn enable when type the word

 document.getElementById('ens').addEventListener
('keyup',function(event){
    
    const enBtn = document.getElementById('enablebtn');
    if(event.target.value =='email'){
        enBtn.removeAttribute('disabled');
    }
    else{
        enBtn.setAttribute('disabled',true);
    }

})

//shoe onmouseover & onmouseout
 //first one 
function changepic1(){
    document.getElementById('firstso').src= "images/shoes/shoe-4.png";
}

function changepic11(){
    document.getElementById('firstso').src= "images/shoes/shoe-1.png";
}

//second one
function changepic2(){
    document.getElementById('secondso').src= "images/shoes/shoe-5.png";
}

function changepic22(){
    document.getElementById('secondso').src= "images/shoes/shoe-2.png";
}

//third one
function changepic3(){
    document.getElementById('thirdso').src= "images/shoes/shoe-6.png";
}

function changepic33(){
    document.getElementById('thirdso').src= "images/shoes/shoe-3.png";
}


//div color change double click
   //with function
// function Doubleclic(){
//     document.getElementById('doucli').style.backgroundColor = 'skyblue';
// }

//or 
document.getElementById('doucli').addEventListener('dblclick',Doubleclic);
function Doubleclic(){
    document.getElementById('doucli').style.backgroundColor = 'yellow';
}


       //direct
// document.getElementById('doucli').addEventListener
// ('dblclick',function(){
//     document.getElementById('doucli').style.backgroundColor = 'hotpink';
// })
