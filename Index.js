let hour = document.getElementById("hour");
let minutes = document.getElementById("min");
let seconds = document.getElementById("sec");
let ams = document.getElementById("five");
let imageUrl = document.querySelector(".img1");
let image_text = document.querySelector(".slo");
let time_quote = document.querySelector(".box3");


let clock = setInterval(
    function time() {
        let date = new Date();
        let hr = date.getHours();
        let mins = date.getMinutes();
        let secs = date.getSeconds();

        if(hr >= 12){
            five.innerHTML = 'PM';
        }
        else{
            five.innerHTML = 'AM';
        }

        if(hr>12){
            hr = hr-12;
        }

        hour.textContent = hr;
        minutes.textContent = mins;
        seconds.textContent = secs;

        moring_hours = [8,9,10,11];
        lunch_hours = [12,1,2,3];
        evening_hours = [4,5,6,7];
        dinner_hours = [8,9,10,11,12];


        if (moring_hours.includes(hr))
        {
            FOOD_QUOTE = "GRAB SOME HEALTHY BREAKFAST!!!";
            TIME_QUOTE = "GOOD MORNING!! WAKE UP !!";
            image_url = 'Component\ 30\ –\ 1@2x.png';
        } 
        else if (lunch_hours.includes(hr)) 
        {
            FOOD_QUOTE = "LET'S HAVE SOME LUNCH !!";
            TIME_QUOTE = "GOOD AFTERNOON !! TAKE SOME SLEEP";
            image_url = 'lunch.png';
            
        } 
        else if (evening_hours.includes(hr)) 
        {
            FOOD_QUOTE = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
            TIME_QUOTE = "GOOD EVENING !!";
            image_url = 'evening@2x.png';
        } 
        else if (dinner_hours.includes(hr))
        {
            FOOD_QUOTE = "CLOSE YOUR EYES AND GO TO SLEEP";
            TIME_QUOTE = "GOOD NIGHT !!";
            image_url = 'night1.png';
        }

        image_text.innerHTML = `${FOOD_QUOTE}`;
        time_quote.innerHTML = `${TIME_QUOTE}`;
        imageUrl.style.backgroundImage = "url("+image_url+")";
    },0
)

//---------------------Time will be updated here after clicking on "Set Alarm" button-----------------------

let setAlarm = document.getElementById('Alaram');

function mouseIn(){
    setAlarm.innerText = 'Party time !';//hover effect
}

function mouseOut(){
    setAlarm.innerText = 'Set Alarm';//hover effect
}

let set = document.getElementById('Alaram');

set.setAttribute('onclick','alarmSet()');

let optionOne = document.getElementById('d1');
let optionTwo = document.getElementById('d2');
let optionThree = document.getElementById('d3');
let optionFour = document.getElementById('d4');

function alarmSet(){
    let wakeUpT = optionOne.options[optionOne.selectedIndex].innerText;
    let lunchT = optionTwo.options[optionTwo.selectedIndex].innerText;
    let napT = optionThree.options[optionThree.selectedIndex].innerText;
    let sleepT = optionFour.options[optionFour.selectedIndex].innerText;

//-----------displaying alarm time---------------------------------------------
    document.querySelector('.setT').innerHTML =`Wake Up Time : ${wakeUpT}<br>
    <span>Lunch Time : ${lunchT}</span><br>
    <span>Nap Time : ${napT}</span><br>
    <span>Night Time : ${sleepT}</span>`;
}