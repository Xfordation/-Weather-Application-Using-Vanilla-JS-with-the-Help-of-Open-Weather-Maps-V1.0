// Init Weather Class
const wea = new weather ;
//Init UI Class
const ui = new UI ;
//On Submit Button
const frm= document.getElementById('frm1');
frm.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = document.getElementById('t1').value    
            if(val !== ''){
              wea.getCity(val)
                .then(data => {
                    if(data.city.message === 'city not found'){
                    //alert
                        ui.showalert();
                    }else{
                        //UI Display
                        console.log(data);
                        ui.showcity(data.city.weather);
                        ui.showtemp(data.city.main);
                        ui.showtable_sunrise(data.city.sys, data.city.main, data.city.wind, data.city);
                       // ui.showtable_temp(data.city.main)
                        document.getElementById('t1').value = ''
                    }
                });
            }
});