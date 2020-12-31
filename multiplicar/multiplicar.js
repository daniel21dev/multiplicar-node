// requireds
const fs = require('fs')
const colors = require('colors')

let listarTabla = (base,limite) => {
    
    console.log('================='.green);
    console.log(` tabla de ${base}`.blue);
    console.log(`=================`.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} X ${i} = ${base*i}`);    
    }
}

const crearArchivo = ( base, limite) =>{
    return new Promise((resolve,reject)=>{

        if ( !Number(base) ){
            reject(`El valor introducido ${base} no es un numero`.bgRed)
            return
        }
        let data = ''

        for (let i = 1; i <= limite; i++) {
        data += `${base} x ${i} = ${i * base} \n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) 
                reject(err)
            else 
                resolve(`tabla-${base}.txt`.blue)
        })
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}

