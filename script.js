const balls=document.getElementsByClassName('ball');
document.onmousemove=(a)=>{
const x=(a.clientX*60)/window.innerWidth+'%';
const y=(a.clientY*90)/window.innerHeight+'%';
for(i=0;i<100;i++){
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform ='translate(-' + x +',-' + y + ')';
}
};