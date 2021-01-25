


setTimeout(()=>{
    console.log("coffee");
},3000);

const names = ["John", "Mary", "Bob"];
const greet = names.map(name =>`Hello ${name}`);

console.log(greet);

function greeting(name){
    console.log(`Hello ${name}!`);
}
// let greeting = name => console.log(`Hello ${name}`);   -- és el mateix que l'anterior

greeting("Jonathan");

const userInfo = (firstName, lastName, callback)=>{
    const fullName = `${firstName} ${lastName}`
    callback(fullName);
}
userInfo("John", "Doe", greeting);

//PROMISES - pending, fullfilled, rejected
const hasMeeting = true;
const meeting = new Promise((resolve, reject)=> {
    if(!hasMeeting){
        const meetingDetails = {
            name: "marketing meeting",
            location: "skype",
            time: "1:00 PM"
        }
        resolve(meetingDetails);
    }else{
        reject(new Error("Meeting already scheduled"))
    }
});
// const addToCalendar = meetingDetails => {
//     return new Promise((resolve, reject) =>{
//         const calendar = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`;
//         resolve(calendar);
//     })
// }
const addToCalendar = meetingDetails => {
    const calendar = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`;
    return Promise.resolve(calendar);
}

async function myMeeting(){
    try{
        const meetingDetails = await meeting;
        const message = await addToCalendar(meetingDetails);
        console.log(message);
    }catch(err){
        console.log(err.message);
    }
}    

myMeeting();
// myMeeting().catch(err => console.log(err.message));
// meeting
// .then(addToCalendar)
// .then(res => {
//     console.log("Meeting Scheduled");
//     console.log(res);
// })
// .catch( err => {
//     console.log(err.message);
// });


const promise1 = Promise.resolve("Promise 1 complete");
const promise2 = new Promise((res, rej) =>{
    setTimeout(()=>{
        res("Promise 2 complete");
    }, 2000);
});

// promise1.then(res => console.log(res));
// promise2.then(res => console.log(res));

Promise.all([promise1, promise2]).then(res=>console.log(res)); //so they come all together
Promise.race([promise1, promise2]).then(res=>console.log(res)); //returns the first promise to finish

//GENERATOR FUNCTION 
function* generatorFunc(){
    let data = getData();
    yield data; //-Pause this function while the rest still work
    console.log(data);
}

//ASYNC / AWAIT

