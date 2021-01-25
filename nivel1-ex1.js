// Crear una function que retorni una Promise que invoqui la funcion resolve() o bé reject() que rep. Invocar-la des de fora pasandole totes dues funcions que imprimeixin un missatge diferent en cada cas.

const p = () =>{
    return new Promise((resolve, reject) =>{
        let a = 1+1;
        if(a==2){
            resolve("Success");
            console.log("Success")
        }else{
            reject("Failed");
            console.log("Failed")
        }
    })
};

p();

// let p =new Promise((resolve, reject) =>{
//     let a = 1+1;
//     if(a==2){
//         resolve("Success");
//     }else{
//         reject("Failed");
//     }
// });


// p.then((message) =>{
// console.log("This is in the then " + message);
// }).catch((message)=>{
// console.log("This is in the catch " + message);
// })