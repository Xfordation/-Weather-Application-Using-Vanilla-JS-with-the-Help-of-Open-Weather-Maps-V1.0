class UI {
    constructor(){
        this.city = document.getElementById('city')
        this.txt = document.getElementById('t1')
    }

    //Alert Box Funtion
    showalert(){
        const alert = document.getElementById('alert');
       alert.className = 'alert' 
       alert.style.display = 'table'
       setTimeout(()=>{
           alert.style.display = 'none';
           console.clear();
        },3500)
        alert.classList = 'alert'
    }
    //Clear Text box
    cleartext(){
        this.txt.innerHTML = '';
    }
    //Show City Name and Tempture

    showcity(data){
        let op = '';
        const cityname = this.txt.value;
        data.forEach(i => {
           op += `
                <div class="cityname" id="cityname" >
                    <h3>${cityname}</h3>
                </div> 
                <div class="desc" id="desc">
                    <h4>${i.description}</h4>
                </div>
                <div class="temp" id="temp"></div>
                <div class="table" id="table"></div>
                `;
        });
        this.city.className = 'city'
        this.city.innerHTML = op ;
    }

    //Show temprature
    showtemp(data){
        let op ='';
            op += `<h1 class="temp-head">${Math.round(data.temp - 273)}&degC</h1>`;
            //converting to celcius
            
        document.getElementById('temp').innerHTML = op ;
    }

    //Show Table
    //Show Sunrise and Sunset
    showtable_sunrise(data, data1, data2, data3){
        
        let op = '';
        var dt_sunrise = new Date(data.sunrise * 1000)
        var hours_sunrise = dt_sunrise.getHours().toString().padStart(2,0)
        var min_sunrise = dt_sunrise.getMinutes().toString().padStart(2,0)
        var sec_sunrise = dt_sunrise.getSeconds().toString().padStart(2,0) 
       
        var dt_sunset = new Date(data.sunset * 1000)
        var hours_sunset = dt_sunset.getHours().toString().padStart(2,0)
        var min_sunset = dt_sunset.getMinutes().toString().padStart(2,0)
        var sec_sunset = dt_sunset.getSeconds().toString().padStart(2,0) 
       
        op += `<table id="tbl">
                <tr><th>Sunrise</th><th>sunset</th></tr>
                <td>${hours_sunrise}: ${min_sunrise}: ${sec_sunrise}</td>
                <td>${hours_sunset}: ${min_sunset}: ${sec_sunset}</td>
                
                <tr><th>Minimum Tempture</th><th>Maximum Tempture</th></tr>
                <td>${Math.round(data1.temp_min - 273)}&degC</td>
                <td>${Math.round(data1.temp_max - 273)}&degC</td>
                
                <tr><th>Humidity</th><th>Feels Like</th></tr>
                <td>${data1.humidity}%</td>
                <td>${Math.round(data1.feels_like - 273)}&degC</td>
                
                <tr><th>Wind</th><th>Visibility</th></tr>
                <td>${data2.speed * (60*60)/1000}KM/H</td>
                <td>${data3.visibility}</td>
                </table>`;    
        document.getElementById('table').innerHTML = op    
    }
}