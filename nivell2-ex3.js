let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];

let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];



const getEmpleado = (num) =>{
    return new Promise((resolve,reject)=>{
        let text = [];
        for(let i = 0; i<employees.length; i++){
            text.push(employees[i].id);
        }
        if(text.includes(num)){
            resolve (num)
        }else{reject("No ID was found")}
    })
};
const getSalario = (empleado) =>{
    for(salary of salaries){
        if(salary.id == empleado.id){
            return(salary.salary);
        }
    }
};

getEmpleado(3)
    .then((result)=>{
        console.log(result);
        for(let i = 0; i<employees.length; i++){
            if(employees[i].id == result){
                console.log(employees[i]);
                console.log("Salario: "+getSalario(employees[i]));

            }
        }
    })
    .catch((result)=>{
        console.log("something went wrong: " + result);
    });


    
