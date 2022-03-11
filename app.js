const yargs=require('yargs')

const student=require("./student")


// console.log(fs.writefilesync('for.json'))
yargs.command({
    command:'add',
    describe:'result',
    builder:{
        name:{
            describe:'enter your name',
            demandOption:true,
            type:'string'
        },
        id:{
            describe:'enter your id',
            demandOption:true,
            type: 'string'
        },
        degree:{
            describe:'your degree',
            demandOption:true,
            type: 'array'
        },
        
        comment:{
            describe:'your degree',
            type: 'string'
        }
        
},
handler:(x)=>{
console.log(x)
 
}
})

//delete
yargs.command({
    command:'deletes',
    describe:'deletes',
    builder:{
    
        
        id:{
            describe:'your degree delete',
            demandOption:true,
            type: 'number'
        }
        
},
handler:(x)=>{
console.log(x)
 
}
})

yargs.command({
    command:'readstudent',
    describe:'discribe babies',
    builder:{
        name:{
            describe:'enter your name',
            demandOption:true,
            type:'string'
        },
        degree:{
            describe:'your degree',
            demandOption:true,
            type: 'array'
        }
        
},
handler:(x)=>{
    
console.log(x)
 
}
})


yargs.command({
    command:'liststudent',
    describe:'number student',
    builder:{
        name:{
            describe:'enter your name',
            // demandOption:true,
            type:'string'
        },
        degree:{
            describe:'your degree',
            demandOption:true,
            type: 'array'
        }
        
},
handler:(x)=>{
console.log(x)
 
}
})
yargs.parse()