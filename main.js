// challenge 1:YOur age in days

function ageInDays() {
    var birthyear=prompt("tell your age");
    var ageInDayss=(2021-birthyear)*365;
    var h1=document.createElement('h1');
    var textAnswer=document.createTextNode('you are '+ageInDayss+' days');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('result').appendChild(h1);
}