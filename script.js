let del=document.getElementById('delhi');
let mum=document.getElementById('mumbai');
let pun=document.getElementById('punjab');
let c=document.getElementById('city');
let submitbtn= document.getElementById('btn');
let x=document.getElementById('img');
let inputtempertature=document.getElementById('inputvalue');
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
        // console.log(response)
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
        x.src="sun2.jpg";
    }
    else if(temperature>=8 && temperature<=20){
        x.src="rain+sun.svg";
    }
    else if(temperature<8){
        x.src="cold.jpg";
    }
}

let inputtext;
function covertemp(inputconvt,outputconvt){
    // ouputans.innerHTML=12;
    inputtext=Number.parseInt(inputtempertature.value);
    // console.log(inputtempertature.value);
    // console.log(inputtext);
    // ouputans.innerHTML="14";
 let ans ;
 ans=inputtext;
    if(inputconvt=="Degree" && outputconvt=="Kelvin"){
        ans+=273.15;
        ouputans.innerHTML=`${ans} K`
    }
    if(inputconvt=="Kelvin" && outputconvt=="Degree"){
        ans-=273.15;
        ans=ans.toFixed(4);
        ouputans.innerHTML=`${ans} &#8451;`
    }
    if(inputconvt=="Degree" && outputconvt=="Fahrenheit"){
    ans=((ans)*(9/5))+ 32;
    ans=ans.toFixed(4);
    ouputans.innerHTML=`${ans} &#8457;`
    }

    if(inputconvt=="Fahrenheit" && outputconvt=="Degree"){
    ans=((ans-32)*(5/9));
    ans=ans.toFixed(4);
    ouputans.innerHTML=`${ans} &#8451;`
    }

    if(inputconvt=="Fahrenheit" && outputconvt=="Kelvin"){
    ans=((ans-32)*(5/9))+273.15;
    ans=ans.toFixed(4);
    ouputans.innerHTML=`${ans} K`
    }
    if(inputconvt=="Kelvin" && outputconvt=="Fahrenheit"){
    ans=((ans-273.15)*(9/5))+32;
    ans=ans.toFixed(4);
    ouputans.innerHTML=`${ans} &#8457;`
    }
    if(inputconvt=="Kelvin" && outputconvt=="Kelvin"){
    ans=inputtext;
    ans=ans.toFixed(4);
    ouputans.innerHTML=`${ans} K`
    }
    if(inputconvt=="Degree" && outputconvt=="Degree"){
    ans=inputtext;
    ans=ans.toFixed(4);
    ouputans.innerHTML=`${ans} &#8451;`
    }
    if(inputconvt=="Fahrenheit" && outputconvt=="Fahrenheit"){
    ans=inputtext;
    ans=ans.toFixed(4);
    ouputans.innerHTML=`${ans} &#8457;`
    }
}

// for input text of dropdown to change
let inpty;
function updatetempinput(input){
console.log(input);
updatetextinput.innerHTML=input;
inpty=input;
ouputans.innerHTML="";
// console.log(inputtempertature.value);
}

// for output text
function updatetempoutput(output){
    console.log(output);
    updatetextoutput.innerHTML=output;
    covertemp(inpty,output);
    console.log(inpty);
    console.log(output);
}

