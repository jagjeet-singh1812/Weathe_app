let del=document.getElementById('delhi');
let mum=document.getElementById('mumbai');
let pun=document.getElementById('punjab');
let c=document.getElementById('city');
let submitbtn= document.getElementById('btn');
let x=document.getElementById('img');

let temperature=19;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1140f025a7msh1578d92d480d094p1b26abjsn38b7d7be6895',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
let url='https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=MUMBAI';

function updateweather(city){
    url=`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    fetch(url, options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        // cloud_pct.innerHTML=response.cloud_pct
        feels_like.innerHTML=response.feels_like
        humidity.innerHTML=response.humidity
        max_temp.innerHTML=response.max_temp
        min_temp.innerHTML=response.min_temp
        sunrise.innerHTML=response.sunrise
        sunset.innerHTML=response.sunset
        temp.innerHTML=response.temp
        wind_degrees.innerHTML=response.wind_degrees
        wind_speed.innerHTML=response.wind_speed
        temperature=response.temp;
        // updatephoto(temperature);
        setTimeout(() => {
            updatephoto(temperature);
          }, 1000*0.5);
    })
	.catch(err => console.error(err));
    c.innerHTML=`${city}`;
    inputstring.value="";
    console.log(temperature);
}

del.addEventListener('click',updateweather('Delhi'));
mum.addEventListener('click',updateweather('Mumbai'));
pun.addEventListener('click',updateweather('Punjab'));
// let updatedstring=JSON.stringify(inputstring.value);
// console.log(updatedstring);


submitbtn.addEventListener('click',(e)=>{
    e.preventDefault();
 updateweather(inputstring.value);
})
// for bydefault mumbai
updateweather('Gujrat');

async function updatephoto(temperature){
    if(temperature>20){
        x.src="/Images/sun2.jpg";
    }
    else if(temperature>=8 && temperature<=20){
        x.src="/Images/rain+sun.svg";
    }
    else if(temperature<8){
        x.src="/Images/cold.jpg";
    }
}

