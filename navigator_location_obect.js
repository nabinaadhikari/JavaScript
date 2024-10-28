// Navigator and location of the browser
function navigatorprop(){
    document.write("<br> cookies are endable:" + navigator.cookieEnabled);
    document.write("<br> user of navigator:" + navigator.userAgent);
    document.write("<br> the location of browser is:" + window.location.href +  " <br>"+ "the host name is:"+
        window.location.hostname + "<br> "+ " the origin location of browser is:" + window.location.origin + " <br>"+ " the protocal used : " + window.location.protocol);
    }

navigatorprop();

// browser history
function history(){
alert("The history of browser is:" + window.history.back);
document.write("The history of the browser forward:" + window.history.forward);
}
history();


// timesetout and cleartimeout in window
function myGreeting() {
  alert( "Happy Birthday to You !!");
}
const myTimeout = setTimeout(myGreeting, 3000);
function myStopFunction() {
  clearTimeout(myTimeout);
}

// interval time in window
let myinterval= setInterval(intervalTime, 1000);

function intervalTime(){
    const d = new Date();
    console.log(d.toLocaleTimeString());
}