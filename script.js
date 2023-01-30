var equal = document.querySelector('.yellow');
var dis1 = document.querySelector('.display1');
var dis2 = document.querySelector('.display2');

equal.addEventListener('click', (e) =>{
    if(dis2.value==''|| dis1.value!=''){
        var y = eval(dis1.value);
        dis2.value = "Ans = " + y;
    }
    else{
        var z = eval(dis1.value);
        dis1.value = z;
    }
})
function div(){
    if(dis2.value==''){
        dis1.value += '/';
    }
    else{
        var y = eval(dis1.value);
        dis1.value = y;
        dis1.value += '/';
        dis2.value ='';
    }
}
function mul(){
    if(dis2.value==''){
        dis1.value += '*';
    }
    else{
        var y = eval(dis1.value);
        dis1.value = y;
        dis1.value += '*';
        dis2.value ='';
    }

}
function sub(){
    if(dis2.value==''){
        dis1.value += '-';
    }
    else{
        var y = eval(dis1.value);
        dis1.value = y;
        dis1.value += '-';
        dis2.value ='';
    }

}
function add(){
    if(dis2.value==''){
        dis1.value += '+';
    }
    else{
        var y = eval(dis1.value);
        dis1.value = y;
        dis1.value += '+';
        dis2.value ='';
    }

}
function dot(){
    if(dis2.value==''){
        dis1.value += '.';
    }
    else{
        var y = eval(dis1.value);
        dis1.value = y;
        dis1.value += '.';
        dis2.value ='';
    }

}
function singleZero(){
    if(dis2.value==''){
        dis1.value += '0';
    }
    else{
        var y = eval(dis1.value);
        dis1.value = y;
        dis1.value += '0';
        dis2.value ='';
    }

}
function doubleZero(){
    if(dis2.value==''){
        dis1.value += '00';
    }
    else{
        var y = eval(dis1.value);
        dis1.value = y;
        dis1.value += '00';
        dis2.value ='';
    }

}
function ac(){
    dis1.value ='';
    dis2.value ='';
}
function del(){
    if(dis2.value==''){
        dis1.value = dis1.value.toString().slice(0,-1);
    }
    else{
        dis2.value='';
        dis1.value = dis1.value.toString().slice(0,-1);
    }
}