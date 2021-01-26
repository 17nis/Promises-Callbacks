const getEmpleado = (id, arr) =>{
    return new Promise (resolve=>{
        const found = arr.find(el => el == id)
        if(found){
            resolve (el);
        }else{
            reject("No ID was found!")
        }
    });
}
let arr =[1,2,3];
getEmpleado(1, arr )
    .then((result)=>{
        console.log(result);
    })
    .catch(()=>{
        console.log("No ID was found");
    });