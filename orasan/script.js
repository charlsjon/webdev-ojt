setInterval(displayTime, 1000)
function displayTime(){
    var d = new Date();

    var hour = document.querySelector('.hour');
    var minute = document.querySelector('.minute');
    var second = document.querySelector('.second');
    var indicator = document.querySelector('.ampm');

    if(d.getHours() <= 9){
        hour.innerHTML = "0" + d.getHours() + " :"; 
        indicator.innerHTML = "AM"
    }else if(d.getHours() <= 11){   
        hour.innerHTML = d.getHours() + " :"; 
        indicator.innerHTML = "AM";
    } else if(d.getHours() == 12){
        hour.innerHTML = d.getHours() + " :"; 
        indicator.innerHTML = "PM";
    } else if(d.getHours() >= 22){
        hour.innerHTML = (d.getHours() - 12) + " :";
        indicator.innerHTML = " PM";
    }else if(d.getHours() >= 13){
        hour.innerHTML = "0" + (d.getHours() - 12) + " :";
        indicator.innerHTML = "PM";
    } 

    if(d.getMinutes() <= 9){
        minute.innerHTML = "0" + d.getMinutes() + " :";
    } else{
        minute.innerHTML = d.getMinutes() + " :";

    }

    if(d.getSeconds() <= 9){
        second.innerHTML = "0" + d.getSeconds();
    } else{
        second.innerHTML = d.getSeconds();
    }

}

var timeIn = document.querySelector('.timein-button');


timeIn.addEventListener('click', function(){

    var ind = new Date();

    var hourIn = document.querySelector('.in-hour');
    var hourInWrite = document.createElement('a');
    var minuteIn = document.querySelector('.in-minute');
    var minuteInWrite = document.createElement('a');
    var secondIn = document.querySelector('.in-second');
    var secondInWrite = document.createElement('a');
    var indicatorIn = document.querySelector('.in-ampm');
    var indicatorInWrite = document.createElement('a');

    if(ind.getHours() <= 9){
        hourIn.appendChild(hourInWrite);
        hourInWrite.innerHTML = "0" + ind.getHours() + ":"; 
        indicatorIn.appendChild(indicatorInWrite);
        indicatorInWrite.innerHTML = " AM";

    }else if(ind.getHours() <= 11){
        hourIn.appendChild(hourInWrite);
        hourInWrite.innerHTML = ind.getHours() + ":"; 
        indicatorIn.appendChild(indicatorInWrite);
        indicatorInWrite.innerHTML = " AM";
        
    } else if(ind.getHours() == 12){
        hourIn.appendChild(hourInWrite);
        hourInWrite.innerHTML = ind.getHours() + ":";         
        indicatorIn.appendChild(indicatorInWrite);
        indicatorInWrite.innerHTML = " PM";
        
    } else if(ind.getHours() >= 22){
        hourIn.appendChild(hourInWrite);
        hourInWrite.innerHTML = (ind.getHours() - 12) + ":"; 
        indicatorIn.appendChild(indicatorInWrite);
        indicatorInWrite.innerHTML = " PM";

    }else if(ind.getHours() >= 13){
        hourIn.appendChild(hourInWrite);
        hourInWrite.innerHTML = "0" + (ind.getHours() - 12) + ":"; 
        indicatorIn.appendChild(indicatorInWrite);
        indicatorInWrite.innerHTML = " PM";
    } 

    if(ind.getMinutes() <= 9){
        minuteIn.appendChild(minuteInWrite);
        minuteInWrite.innerHTML = "0" + ind.getMinutes() + ":";
    } else{
        minuteIn.appendChild(minuteInWrite);
        minuteInWrite.innerHTML = ind.getMinutes() + ":";
    }

    if(ind.getSeconds() <= 9){
        secondIn.appendChild(secondInWrite);
        secondInWrite.innerHTML = "0" + ind.getSeconds();
    } else{
        secondIn.appendChild(secondInWrite);
        secondInWrite.innerHTML = ind.getSeconds();
    }

})


var timeOut = document.querySelector('.timeout-button');

timeOut.addEventListener('click', function(){

    var outd = new Date();

    var hourOut = document.querySelector('.out-hour');
    var hourOutWrite = document.createElement('a');
    var minuteOut = document.querySelector('.out-minute');
    var minuteOutWrite = document.createElement('a');
    var secondOut = document.querySelector('.out-second');
    var secondOutWrite = document.createElement('a');
    var indicatorOut = document.querySelector('.out-ampm');
    var indicatorOutWrite = document.createElement('a');

    if(outd.getHours() <= 9){
        hourOut.appendChild(hourOutWrite);
        hourOutWrite.innerHTML = "0" + outd.getHours() + ":"; 
        indicatorOut.appendChild(indicatorOutWrite);
        indicatorOutWrite.innerHTML = " AM";

    }else if(outd.getHours() <= 11){
        hourOut.appendChild(hourOutWrite);
        hourOutWrite.innerHTML = outd.getHours() + ":"; 
        indicatorOut.appendChild(indicatorOutWrite);
        indicatorOutWrite.innerHTML = " AM";
        
    } else if(outd.getHours() == 12){
        hourOut.appendChild(hourOutWrite);
        hourOutWrite.innerHTML = outd.getHours() + ":";         
        indicatorOut.appendChild(indicatorOutWrite);
        indicatorOutWrite.innerHTML = " PM";
        
    } else if(outd.getHours() >= 22){
        hourOut.appendChild(hourOutWrite);
        hourOutWrite.innerHTML = (outd.getHours() - 12) + ":"; 
        indicatorOut.appendChild(indicatorOutWrite);
        indicatorOutWrite.innerHTML = " PM";

    }else if(outd.getHours() >= 13){
        hourOut.appendChild(hourOutWrite);
        hourOutWrite.innerHTML = "0" + (outd.getHours() - 12) + ":"; 
        indicatorOut.appendChild(indicatorOutWrite);
        indicatorOutWrite.innerHTML = " PM";
    } 

    if(outd.getMinutes() <= 9){
        minuteOut.appendChild(minuteOutWrite);
        minuteOutWrite.innerHTML = "0" + outd.getMinutes() + ":";
    } else{
        minuteOut.appendChild(minuteOutWrite);
        minuteOutWrite.innerHTML = outd.getMinutes() + ":";
    }

    if(outd.getSeconds() <= 9){
        secondOut.appendChild(secondOutWrite);
        secondOutWrite.innerHTML = "0" + outd.getSeconds();
    } else{
        secondOut.appendChild(secondOutWrite);
        secondOutWrite.innerHTML = outd.getSeconds();
    }

})

document.querySelector('.reload').addEventListener('click', function(){
    location.reload();
   

})







