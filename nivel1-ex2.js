// Crear una arrow function que, rebent un paràmetre i una function callback, li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre.

const a = (param, callback) =>{
    callback(param);
}
a("foo", console.log);
