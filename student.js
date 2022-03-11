const fs=require('fs')

// const saveData = JSON.stringify(notes)
    
// fs.writeFileSync('student.json',saveData)
    // fs.writeFileSync('student.json')

const add=(Name,id,Comment,degree)=>{
const add= loadadd() 
    const duplicateName=add.filter((obj)=>{
        return obj.Name===Name
    })
    console.log(duplicateName)
    if(duplicateName.length==0){
        add.push({
            Name:Name,
            id,
            degree,
            Comment
        })
        saveadd(add)
        console.log('saved successfully')
    }
    else(
        console.log('error in saved add')

    )
}

const loadadd= () =>{
    
     try{

// fs.writeFileSync('info.json')
//     console.log(fs.readFileSync('info.json').toString )

//     const dataBuffer = fs.writeFileSync('student.json')
    
    return JSON.parse(dataBuffer) 
    }
    catch{
        return []
    }
}

const saveadd = (student) =>{

    const saveData = JSON.stringify(student)
    
    fs.writeFileSync('student.json',saveData)
}

//delete
const deletestudent=(_deleted)=>{
    const notes =loaddelete()
    const addtokeep=notes.filter((obj)=>{
        return id!==id
    })
    console.log(addtokeep)
    saveadd(addtokeep)
    // console.log(' deletd adegree ')

}
// readNotes
const read= () =>{
         const read = loadNotes()
    const readadd= read.find((obj)=>{
        return obj.Name == Name
    })
    console.log(readadd)
    if(readadd){
        console.log(readadd.Name)
    }
    else{
        console.log('Not Found')
    }
}

// list
const liststudent=()=>{
    const student=loadstudent()
    student.forEach((el) => {
        console.log(el.liststudent)
    });
}








module.exports={
    add,
    read,
    deletestudent,
    liststudent
}


