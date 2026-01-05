console.log("js loaded");

let apiKey = "aaeafb4a50c846cb95b93725253012";


  
let txt_city = document.getElementById("txt_city");
txt_city.addEventListener("keypress",e =>{
  if(e.key =="Enter"){
    apiCall(txt_city.value)
    
  }
})

let apiCall = (city) => {
 
fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
  .then(res => res.json())
  .then(data => setWeather(data))
  console.log(city);
  
}




let setWeather = (data) => {
  console.log(data);


  let iconImg = document.querySelector("#icon img");
  iconImg.src = `https:${data.current.condition.icon}`;
  iconImg.alt = data.current.condition.text; 

  let temperature = document.getElementById("temperature_value")
  temperature.innerText = `${data.current.temp_c.toFixed(1)}°C`;
  let time = document.getElementById("time");
let localTime = data.location.localtime;


let date = new Date(localTime.replace(" ", "T")); // Convert "YYYY-MM-DD HH:MM" → valid ISO string


let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
};


time.innerText = date.toLocaleString("en-US", options);

let condition =document.getElementById("condition");
condition.innerText=data.current.condition.text;



};
