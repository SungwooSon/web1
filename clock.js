const clockContainer = document.querySelector(".js-clock");
const dateTitle  = clockContainer.querySelector("#date");
const clockTitle = clockContainer.querySelector("#clock");



    
function getDate() {
    const date = new Date();   
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth()+1;
    dateTitle.innerHTML=`${year}년 ${month}월 ${day}일`;
    //console.log();
}
function getTime() {
    const date = new Date();
    const minute = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours<10?`0${hours}`:hours}:${minute<10?`0${minute}`:minute}:${seconds<10?`0${seconds}`:seconds}`;
}

function init() {
    getDate();
    getTime();
    setInterval(getTime,1000);
}

init();