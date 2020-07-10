class weather {
    constructor(){
        
        this.appid = '2a343257f8c94d8b908b1995aa9cd2be';
    }
    async getCity(cityname){
             
        const cityResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${this.appid}`)
        const city = await cityResponse.json();
        return {
            city
        }
    }
}