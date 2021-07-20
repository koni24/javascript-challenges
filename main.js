// challenge 1:YOur age in days

function ageInDays() {
    var birthyear=prompt("tell your birth year");
    var ageInDayss=(2021-birthyear)*365;
    var h1=document.createElement('h1');
    var textAnswer=document.createTextNode('you are '+ageInDayss+' days');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('result').appendChild(h1);
}
function reset(){
    document.getElementById('ageInDays').remove();
}
function generatePhoto(){
    var image=document.createElement('img');
    var div=document.getElementById('flex-cat-gen');
    image.src="https://source.unsplash.com/collection/190727/1600x900";
    image.width=100;
    image.height=100;
    div.appendChild(image);
}