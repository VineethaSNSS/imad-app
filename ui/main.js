console.log('Loaded!');
//change value
var element=document.getElementById('main-text');
element.innerHTML="new value";
//move img
var img=document.getElementById('img');
img.onclick=function(){
    img.style.marginLeft='100px';
}