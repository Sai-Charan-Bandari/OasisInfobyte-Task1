const intro = (e)=>{
    if(e) document.getElementsByClassName('result')[0].innerHTML="#BSC#"
    else document.getElementsByClassName('result')[0].innerHTML=""
    setTimeout(intro , 1000 , false)
}
setTimeout(intro , 500 , true)
const input = (e)=>document.getElementsByClassName('operation')[0].innerHTML+=e;
const clear1 = ()=>document.getElementsByClassName('operation')[0].innerHTML="";
const del = ()=>{
    let k = document.getElementsByClassName('operation')[0]
    k.innerHTML = k.innerHTML.substring(0,k.innerHTML.length-1)
};
const calc = ()=>{
        let k = document.getElementsByClassName('result')[0]
        res = eval(document.getElementsByClassName('operation')[0].innerHTML)
        k.innerHTML = res
}