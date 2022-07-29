const getdinner = () => {
    return new Promise((resolve, reject)=>{
    const buyfoods = ['chicken', 'pasta', 'eggs', 'cheese', 'steak'];
    setTimeout(()=> {
        const random = Math.floor(Math.random()* 5);
        const buyfood = buyfoods[random];
        console.log(`today i bought ${buyfood} for dinner`);
        resolve(buyfood)
    },1000)
})
}

const placedinner = (buyfood) =>{
    return new Promise((resolve, reject)=>{
       setTimeout(()=>{
        console.log('time to wash the food');
        setTimeout(()=>{
            console.log(`${buyfood} is now clean`);
        },1000)
       },1000)
        
        resolve(true);
    })
}

const makedinner = (washed) =>{
    return new Promise((resolve, reject)=>{
        if(washed){
           setTimeout(()=>{
            console.log(`the dinner is ready to be cooked`)
            setTimeout(()=>{
                console.log(`time to cook the dinner`)
            setTimeout(()=>{
                resolve(`the dinner is cooked`)
            },5000)
            },2500)
           },3000)
            
        }  
    })
}

async function eatdinner(){
    try{
    let get = await getdinner();
    let place = await placedinner(get);
    let make = await makedinner(place);
    console.log(make)
 }
 catch(error){
     console.log(error);
     console.log('something wrong')
 }
}

eatdinner()