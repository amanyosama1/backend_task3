//const request = require('request')
const geocode =require ('./geocode.js')
const forecast =require ('./forecast.js')


const country=process.argv[2]

geocode(country,(error,data)=>{
    console.log("ERROR : ",error)
    console.log("DATA : ",data)
    if(data){
        forecast(data.latitude,data.longitude,(error,data)=>{
            console.log("ERROR : "+error)
            console.log("DATA : "+data)
        })
    }else{
        console.log("wrong data entered")
    }
})